import { test } from "node:test";
import assert from "node:assert/strict";
import { ScreenClient, encode, decode } from "../dist/index.js";
class FakeSocket {
  readyState = 1;
  sent = [];
  send(data) {
    const frame = decode(data);
    this.sent.push(frame);
    if (frame.type === "playback" && this.autoAck !== false)
      queueMicrotask(() =>
        this.frame({
          type: "playback_result",
          eventId: frame.eventId,
          requestId: frame.requestId,
          callId: frame.callId,
          status: frame.status,
          ok: true,
        }),
      );
  }
  frame(data) {
    // Complete happy-path fixtures; malformed-wire tests bypass this fixture helper.
    if (data.type === "consume_result")
      data = {
        ...data,
        payload: { screenId: "s1", remaining: 0, text: "A", ...data.payload },
      };
    if (data.type === "calls" && Array.isArray(data.payload))
      data = {
        ...data,
        payload: data.payload.map((c) => ({
          queueId: "",
          personId: "",
          text: "A",
          totalQuota: 1,
          consumed: 0,
          remaining: 1,
          active: true,
          ...c,
        })),
      };
    this.onmessage?.({ data: encode(data) });
  }
  close() {
    this.readyState = 3;
    this.onclose?.();
  }
}
function setup() {
  let socket = new FakeSocket();
  const states = [];
  const client = new ScreenClient({
    baseURL: "http://localhost:8080",
    token: "test-only",
    webSocketFactory: () => socket,
    onSnapshot: (s) => states.push(s),
    requestTimeoutMs: 100,
  });
  client.connect();
  socket.onopen();
  socket.frame({ type: "snapshot", payload: state(1) });
  return { client, socket, states };
}
function state(version, epoch = "epoch-1") {
  return {
    screenId: "s1",
    version,
    epoch,
    templateVersion: "1",
    data: { queues: [] },
  };
}
test("auth token is sent as first frame, and snapshots are monotonic", () => {
  const { client, socket, states } = setup();
  assert.equal(socket.sent[0].type, "auth");
  socket.frame({ type: "snapshot", payload: state(3) });
  socket.frame({ type: "snapshot", payload: state(2) });
  assert.deepEqual(
    states.map((s) => s.version),
    [1, 3],
  );
  socket.frame({ type: "snapshot", payload: state(1, "new-epoch") });
  assert.equal(states.length, 3);
  client.close();
});
test("consume uses explicit id and correlation", async () => {
  const { client, socket } = setup();
  const p = client.consume("c1", "r1");
  assert.deepEqual(socket.sent.at(-1), {
    type: "consume",
    callId: "c1",
    requestId: "r1",
  });
  socket.frame({
    type: "consume_result",
    payload: {
      requestId: "r1",
      callId: "c1",
      screenId: "s1",
      granted: true,
      remaining: 1,
      text: "A001",
    },
  });
  assert.equal((await p).remaining, 1);
  client.close();
});
test("timeout does not retry or change request ID", async () => {
  const { client, socket } = setup();
  await assert.rejects(client.consume("c1", "r2"), /SAME requestId/);
  assert.equal(socket.sent.filter((s) => s.type === "consume").length, 1);
  client.close();
});
test("refused consumption never invokes player", async () => {
  const { client, socket } = setup();
  let plays = 0;
  const p = client.consumeAndPlay("c1", "r3", async () => {
    plays++;
  });
  socket.frame({
    type: "consume_result",
    payload: {
      requestId: "r3",
      callId: "c1",
      granted: false,
      remaining: 0,
      text: "",
    },
  });
  await p;
  assert.equal(plays, 0);
  client.close();
});
test("player failure records failure without quota refund", async () => {
  const { client, socket } = setup();
  const p = client.consumeAndPlay("c1", "r4", async () => {
    throw new Error("audio unavailable");
  });
  socket.frame({
    type: "consume_result",
    payload: {
      requestId: "r4",
      callId: "c1",
      granted: true,
      remaining: 0,
      text: "A001",
    },
  });
  await assert.rejects(p, /audio unavailable/);
  assert.deepEqual(
    socket.sent.filter((s) => s.type === "playback").map((s) => s.status),
    ["started", "failed"],
  );
  client.close();
});
test("correlated server error rejects pending request immediately", async () => {
  const { client, socket } = setup();
  const p = client.consume("c1", "r5");
  socket.frame({
    type: "error",
    requestId: "r5",
    message: "request id conflict",
  });
  await assert.rejects(p, /request id conflict/);
  client.close();
});
test("constructor validates credentials and endpoint", () => {
  assert.throws(
    () => new ScreenClient({ baseURL: "http://a", token: "" }),
    /token/,
  );
  for (const url of [
    "ftp://a",
    "http://user:pass@a",
    "http://a/path",
    "http://a?q=x",
    "http://a/#fragment",
  ])
    assert.throws(() => new ScreenClient({ baseURL: url, token: "x" }));
});
test("snapshot getter cannot mutate mirror; sync requests full state", () => {
  const { client, socket } = setup();
  client.snapshot.data.queues.push({ id: "bad" });
  assert.equal(client.snapshot.data.queues.length, 0);
  client.sync();
  assert.equal(socket.sent.at(-1).type, "sync");
  client.close();
  assert.throws(() => client.sync(), /offline/);
});
test("consume rejects empty and duplicate IDs and wrong correlation", async () => {
  const { client, socket } = setup();
  await assert.rejects(client.consume("", "x"), /required/);
  const p = client.consume("c", "r");
  await assert.rejects(client.consume("c", "r"), /in flight/);
  socket.frame({
    type: "consume_result",
    payload: { requestId: "r", callId: "wrong", granted: true },
  });
  socket.frame({
    type: "consume_result",
    payload: { requestId: "r", callId: "c", granted: false },
  });
  await assert.rejects(p, /mismatch/);
  client.close();
});
test("disconnect rejects uncertain consume; close cancels reconnect", async () => {
  const { client, socket } = setup();
  const p = client.consume("c", "r");
  socket.close();
  await assert.rejects(p, /SAME requestId/);
  client.close();
  await assert.rejects(client.consume("c", "r"), /offline/);
});
test("success replay invokes player once and logs completed", async () => {
  const { client, socket } = setup();
  let plays = 0;
  for (let i = 0; i < 2; i++) {
    const p = client.consumeAndPlay("c", "r", async () => {
      plays++;
    });
    socket.frame({
      type: "consume_result",
      payload: { callId: "c", requestId: "r", granted: true, text: "test" },
    });
    await p;
  }
  assert.equal(plays, 1);
  assert.deepEqual(
    socket.sent.filter((x) => x.type === "playback").map((x) => x.status),
    ["started", "completed"],
  );
  client.close();
});
test("invalid frames surface errors without replacing valid state", () => {
  const errors = [];
  const { client, socket } = setup();
  client.options.onError = (e) => errors.push(e.message);
  socket.frame({
    type: "snapshot",
    payload: { ...state(2), templateVersion: "2" },
  });
  assert.throws(() => socket.frame({ type: "calls", payload: {} }));
  socket.onmessage({ data: "invalid json" });
  assert.equal(errors.length, 2);
  assert.equal(client.snapshot.version, 1);
  client.close();
});
test("auth policy close stops reconnect storm", async () => {
  let opens = 0;
  const errors = [];
  const socket = new FakeSocket();
  const client = new ScreenClient({
    baseURL: "https://example.test/mediflow",
    token: "bad",
    reconnectMs: 1,
    webSocketFactory: (url) => {
      assert.equal(url, "wss://example.test/mediflow/ws");
      opens++;
      return socket;
    },
    onError: (e) => errors.push(e.message),
  });
  client.connect();
  socket.onclose({ code: 1008 });
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(opens, 1);
  assert.match(errors[0], /Authentication/);
  client.close();
});
test("calls delivered, explicit playback carries error", () => {
  const { client, socket } = setup();
  let calls;
  client.options.onCalls = (x) => (calls = x);
  socket.frame({
    type: "calls",
    payload: [{ id: "c" }],
    page: 1,
    pageSize: 20,
    total: 1,
  });
  assert.equal(calls[0].id, "c");
  void client.reportPlayback("c", "r", "failed", "no audio").catch(() => {});
  assert.deepEqual(socket.sent.at(-1), {
    type: "playback",
    eventId: "r:failed",
    callId: "c",
    requestId: "r",
    status: "failed",
    error: "no audio",
  });
  client.close();
});
test("factory failure reconnects and close suppresses stale open", async () => {
  let attempts = 0,
    socket = new FakeSocket();
  const errors = [];
  const client = new ScreenClient({
    baseURL: "http://host",
    token: "t",
    reconnectMs: 1,
    webSocketFactory: () => {
      if (++attempts === 1) throw Error("factory unavailable");
      return socket;
    },
    onError: (e) => errors.push(e.message),
  });
  client.connect();
  client.connect();
  await new Promise((r) => setTimeout(r, 15));
  assert.equal(attempts, 2);
  socket.onerror();
  client.close();
  socket.onopen();
  assert.equal(socket.sent.length, 0);
  assert.deepEqual(errors, [
    "factory unavailable",
    "WebSocket connection error",
  ]);
});
test("authentication timeout closes unauthenticated socket", async () => {
  const socket = new FakeSocket();
  const client = new ScreenClient({
    baseURL: "http://host",
    token: "t",
    requestTimeoutMs: 5,
    reconnectMs: 100,
    webSocketFactory: () => socket,
  });
  client.connect();
  socket.onopen();
  await new Promise((r) => setTimeout(r, 15));
  assert.equal(socket.readyState, 3);
  client.close();
});
test("playback logging failure is reported without retrying successful audio", async () => {
  const { client, socket } = setup();
  const errors = [];
  client.options.onError = (e) => errors.push(e.message);
  const p = client.consumeAndPlay("c", "r", async () => {
    client.close();
  });
  socket.frame({
    type: "consume_result",
    payload: { callId: "c", requestId: "r", granted: true, text: "A" },
  });
  assert.equal((await p).granted, true);
  assert.ok(errors.some((e) => e.includes("offline")));
});

test("calls metadata preserves history pagination and sync validates bounds", () => {
  const { client, socket } = setup();
  let info;
  client.options.onCalls = (rows, page) => {
    assert.equal(rows[0].active, false);
    info = page;
  };
  socket.frame({
    type: "calls",
    payload: [{ id: "old", active: false }],
    page: 2,
    pageSize: 1,
    total: 3,
  });
  assert.deepEqual(info, { page: 2, pageSize: 1, total: 3 });
  client.sync(3, 1);
  assert.deepEqual(socket.sent.at(-1), { type: "sync", page: 3, pageSize: 1 });
  for (const args of [
    [0, 20],
    [1, 101],
    [NaN, 20],
    [1, 1.5],
  ])
    assert.throws(() => client.sync(...args), /page/);
  client.close();
});
test("unbounded legacy call frames and impossible page metadata are rejected", () => {
  const { client, socket } = setup();
  const errors = [];
  client.options.onError = (e) => errors.push(e.message);
  socket.frame({ type: "calls", payload: [] });
  socket.frame({
    type: "calls",
    payload: [],
    page: 10,
    pageSize: 20,
    total: 0,
  });
  assert.equal(errors.length, 2);
  client.close();
});

test("start awaits automatic binary auth and authoritative snapshot without application frames", async () => {
  const socket = new FakeSocket();
  let url;
  const client = new ScreenClient({
    baseURL: "https://example.test",
    token: "secret",
    webSocketFactory: (u) => ((url = u), socket),
  });
  const ready = client.start();
  assert.equal(client.isConnected, false);
  assert.equal(url, "wss://example.test/mediflow/ws");
  socket.onopen();
  assert.deepEqual(socket.sent, [{ type: "auth", token: "secret" }]);
  socket.frame({ type: "snapshot", payload: state(1) });
  await ready;
  assert.equal(client.isConnected, true);
  await client.start();
  assert.equal(socket.sent.length, 1);
  client.close();
  assert.equal(client.isConnected, false);
});
test("start rejects close, policy and bounded timeout", async () => {
  for (const mode of ["close", "policy", "timeout"]) {
    const socket = new FakeSocket();
    const client = new ScreenClient({
      baseURL: "http://host",
      token: "t",
      webSocketFactory: () => socket,
    });
    const ready = client.start(5);
    if (mode === "close") client.close();
    if (mode === "policy") socket.onclose({ code: 1008 });
    await assert.rejects(ready);
    client.close();
  }
});
test("consumption object generates one ID and reuses it for every execute", async () => {
  const { client, socket } = setup();
  const operation = client.createConsumption("c1");
  assert.match(operation.requestId, /^[a-f0-9-]{36}$/);
  assert.equal(Object.isFrozen(operation), true);
  for (let i = 0; i < 2; i++) {
    const promise = operation.execute();
    assert.equal(socket.sent.at(-1).requestId, operation.requestId);
    socket.frame({
      type: "consume_result",
      payload: { callId: "c1", requestId: operation.requestId, granted: false },
    });
    await promise;
  }
  assert.equal(
    client.createConsumption("c1", operation.requestId).requestId,
    operation.requestId,
  );
  client.close();
});
test("playback acknowledgement is typed and invalid reports fail locally", async () => {
  const { client, socket } = setup();
  let ack;
  client.options.onPlaybackResult = (result) => (ack = result);
  const result = await client.reportPlayback("c", "r", "completed");
  assert.deepEqual(result, {
    eventId: "r:completed",
    callId: "c",
    status: "completed",
    requestId: "r",
    ok: true,
  });
  assert.deepEqual(ack, result);
  await assert.rejects(client.reportPlayback("c", "r", "bad"), /status/);
  client.close();
});

test("malformed consumption cannot trigger player or cross screen", async () => {
  for (const patch of [{ granted: "false" }, { text: 999 }])
    assert.throws(() =>
      encode({
        type: "consume_result",
        payload: {
          screenId: "s1",
          callId: "c",
          requestId: "bad",
          granted: true,
          remaining: 0,
          text: "A",
          ...patch,
        },
      }),
    );
  for (const patch of [
    { screenId: "other" },
    { remaining: 101 },
    { callId: "other" },
  ]) {
    const { client, socket } = setup();
    let played = 0;
    const p = client.consumeAndPlay("c", "bad", async () => {
      played++;
    });
    socket.onmessage({
      data: encode({
        type: "consume_result",
        payload: {
          screenId: "s1",
          callId: "c",
          requestId: "bad",
          granted: true,
          remaining: 0,
          text: "A",
          ...patch,
        },
      }),
    });
    await assert.rejects(p);
    assert.equal(played, 0);
    client.close();
  }
});
test("pending feed drains its cursor independently of history page", () => {
  const { client, socket } = setup();
  const received = [];
  client.options.onPendingCalls = (rows) => received.push(...rows);
  client.sync(3, 1);
  client.refreshPendingCalls();
  let request = socket.sent.at(-1);
  assert.equal(request.type, "pending_sync");
  const call = {
    id: "c1",
    queueId: "q",
    personId: "p",
    text: "A",
    active: true,
    totalQuota: 1,
    remaining: 1,
    consumed: 0,
  };
  socket.frame({
    type: "pending_calls",
    requestId: request.requestId,
    screenId: "s1",
    payload: [call],
    nextCursor: "next",
  });
  request = socket.sent.at(-1);
  assert.equal(request.cursor, "next");
  socket.frame({
    type: "pending_calls",
    requestId: request.requestId,
    screenId: "s1",
    payload: [{ ...call, id: "c2" }],
    nextCursor: "",
  });
  assert.deepEqual(
    received.map((c) => c.id),
    ["c1", "c2"],
  );
  assert.equal(client.historyPage, 3);
  client.close();
});
test("playback errors and disconnect reject the exact event promise", async () => {
  const { client, socket } = setup();
  socket.autoAck = false;
  const p = client.reportPlayback("c", "r", "started", undefined, "event-1");
  socket.frame({
    type: "error",
    eventId: "event-1",
    requestId: "r",
    message: "audit failed",
  });
  await assert.rejects(p, /audit failed/);
  const retry = client.reportPlayback(
    "c",
    "r",
    "started",
    undefined,
    "event-1",
  );
  client.close();
  await assert.rejects(retry, /closed/);
});
test("reconnect backoff is bounded and restores history subscription", async () => {
  const sockets = [];
  const client = new ScreenClient({
    baseURL: "http://host",
    token: "t",
    reconnectMs: 1,
    reconnectMaxMs: 2,
    webSocketFactory: () => {
      const socket = new FakeSocket();
      sockets.push(socket);
      return socket;
    },
  });
  client.connect();
  sockets[0].onopen();
  sockets[0].frame({ type: "snapshot", payload: state(1) });
  client.sync(3, 1);
  sockets[0].close();
  await new Promise((r) => setTimeout(r, 10));
  sockets[1].onopen();
  sockets[1].frame({ type: "snapshot", payload: state(1) });
  assert.deepEqual(sockets[1].sent.at(-1), {
    type: "sync",
    page: 3,
    pageSize: 1,
  });
  assert.equal(client.reconnectAttempt, 0);
  client.close();
});

test("oversized frames are rejected before protobuf decoding", () => {
  const { client, socket } = setup();
  const errors = [];
  client.options.onError = (e) => errors.push(e.message);
  socket.onmessage({ data: new Uint8Array((16 << 20) + 1) });
  assert.match(errors[0], /16 MiB/);
  assert.equal(client.snapshot.version, 1);
  client.close();
});

test("callback failures cannot strand pending synchronization or readiness", () => {
  const socket = new FakeSocket();
  const statuses = [];
  const client = new ScreenClient({
    baseURL: "http://localhost",
    token: "test",
    webSocketFactory: () => socket,
    onSnapshot() {
      throw Error("render failed");
    },
    onPendingCalls() {
      throw Error("view failed");
    },
    onStatus: (s) => statuses.push(s),
    onError() {
      throw Error("error observer failed");
    },
  });
  try {
    client.connect();
    socket.onopen();
    socket.frame({ type: "snapshot", payload: state(1) });
    assert.equal(client.isConnected, true);
    const req = socket.sent.find((m) => m.type === "pending_sync");
    socket.frame({
      type: "pending_calls",
      screenId: "s1",
      requestId: req.requestId,
      payload: [],
      nextCursor: "",
    });
    client.refreshPendingCalls();
    assert.equal(
      socket.sent.filter((m) => m.type === "pending_sync").length,
      2,
    );
  } finally {
    client.close();
  }
});
test("policy rejection emits explicit rejected terminal status", () => {
  const socket = new FakeSocket(),
    statuses = [];
  const client = new ScreenClient({
    baseURL: "http://localhost",
    token: "test",
    webSocketFactory: () => socket,
    onStatus: (s) => statuses.push(s),
  });
  client.connect();
  socket.onclose({ code: 1008 });
  assert.equal(statuses.at(-1), "rejected");
  client.close();
});

test("temporary unavailable close reconnects, policy rejection does not", async () => {
  let opened = 0;
  const statuses = [];
  const socket = new FakeSocket();
  const c = new ScreenClient({
    baseURL: "http://localhost",
    token: "t",
    reconnectMs: 1,
    reconnectMaxMs: 2,
    webSocketFactory: () => {
      opened++;
      return socket;
    },
    onStatus: (s) => statuses.push(s),
  });
  try {
    c.connect();
    socket.onclose({ code: 1013 });
    await new Promise((r) => setTimeout(r, 15));
    assert.equal(opened, 2);
    assert.ok(statuses.includes("offline"));
    socket.onclose({ code: 1008 });
    await new Promise((r) => setTimeout(r, 15));
    assert.equal(opened, 2);
    assert.equal(statuses.at(-1), "rejected");
  } finally {
    c.close();
  }
});
test("async callbacks are isolated, including errors in error observers", async () => {
  const socket = new FakeSocket();
  const c = new ScreenClient({
    baseURL: "http://localhost",
    token: "t",
    webSocketFactory: () => socket,
    onSnapshot: async () => {
      throw Error("render");
    },
    onPendingCalls: async () => {
      throw Error("pending");
    },
    onError: async () => {
      throw Error("observer");
    },
  });
  try {
    c.connect();
    socket.onopen();
    socket.frame({ type: "snapshot", payload: state(1) });
    const id = socket.sent.find((m) => m.type === "pending_sync").requestId;
    socket.frame({
      type: "pending_calls",
      screenId: "s1",
      requestId: id,
      payload: [],
      nextCursor: "",
    });
    await new Promise((r) => setTimeout(r, 5));
    c.refreshPendingCalls();
    assert.equal(
      socket.sent.filter((m) => m.type === "pending_sync").length,
      2,
    );
    assert.equal(c.isConnected, true);
  } finally {
    c.close();
  }
});

test("unattended pending synchronization retries online timeout and stops on close", async () => {
  const socket = new FakeSocket();
  const errors = [];
  const client = new ScreenClient({
    baseURL: "http://localhost",
    token: "test-only",
    webSocketFactory: () => socket,
    requestTimeoutMs: 10,
    reconnectMs: 5,
    reconnectMaxMs: 10,
    onPendingCalls() {},
    onError: (e) => errors.push(e),
  });
  try {
    client.connect();
    socket.onopen();
    socket.frame({ type: "snapshot", payload: state(1) });
    await new Promise((r) => setTimeout(r, 70));
    assert.equal(client.isConnected, true);
    assert.ok(socket.sent.filter((m) => m.type === "pending_sync").length >= 3);
    assert.ok(errors.length >= 2);
    client.close();
    const count = socket.sent.length;
    await new Promise((r) => setTimeout(r, 40));
    assert.equal(socket.sent.length, count);
  } finally {
    client.close();
  }
});
test("pending server errors retry without an application refresh", async () => {
  const socket = new FakeSocket();
  const client = new ScreenClient({
    baseURL: "http://localhost",
    token: "test-only",
    webSocketFactory: () => socket,
    requestTimeoutMs: 100,
    reconnectMs: 5,
    reconnectMaxMs: 10,
    onPendingCalls() {},
    onError() {},
  });
  try {
    client.connect();
    socket.onopen();
    socket.frame({ type: "snapshot", payload: state(1) });
    const request = socket.sent.find((m) => m.type === "pending_sync");
    socket.frame({
      type: "error",
      requestId: request.requestId,
      message: "temporary database error",
    });
    await new Promise((r) => setTimeout(r, 20));
    assert.equal(
      socket.sent.filter((m) => m.type === "pending_sync").length,
      2,
    );
  } finally {
    client.close();
  }
});

test("preview uses the admin read-only channel and never sends consumption", async () => {
  const socket = new FakeSocket();
  let url;
  const snapshots = [];
  const client = new ScreenClient({
    baseURL: "http://localhost:8080",
    token: "private-screen-token",
    mode: "preview",
    webSocketFactory: (value) => {
      url = value;
      return socket;
    },
    onSnapshot: (value) => snapshots.push(value),
  });
  const ready = client.start();
  assert.equal(url, "ws://localhost:8080/mediflow/ws/diagnostic");
  assert(!url.includes("private-screen-token"));
  socket.onopen();
  socket.frame({ type: "snapshot", payload: state(1) });
  await ready;
  socket.frame({ type: "calls", payload: [], page: 1, pageSize: 20, total: 0 });
  client.refreshPendingCalls();
  await assert.rejects(client.consume("c1", "r1"), /read-only/);
  await assert.rejects(
    client.reportPlayback("c1", "r1", "started"),
    /read-only/,
  );
  assert.deepEqual(
    socket.sent.map((x) => x.type),
    ["auth"],
  );
  socket.frame({ type: "snapshot", payload: state(2) });
  assert.deepEqual(
    snapshots.map((x) => x.version),
    [1, 2],
  );
  client.close();
});

test("preview refuses playback configuration and observers", () => {
  assert.throws(
    () =>
      new ScreenClient({
        baseURL: "http://localhost",
        token: "t",
        mode: "preview",
        playback: { play: async () => {} },
      }),
    /read-only/,
  );
  assert.throws(
    () =>
      new ScreenClient({
        baseURL: "http://localhost",
        token: "t",
        mode: "preview",
        onPendingCalls: () => {},
      }),
    /read-only/,
  );
});

test("preview reconnect reauthenticates and replaces the last snapshot authoritatively", async () => {
  const sockets = [];
  const seen = [];
  const client = new ScreenClient({
    baseURL: "http://localhost",
    token: "t",
    mode: "preview",
    reconnectMs: 1,
    reconnectMaxMs: 2,
    webSocketFactory: () => {
      const socket = new FakeSocket();
      sockets.push(socket);
      return socket;
    },
    onSnapshot: (s) => seen.push(s.version),
  });
  const ready = client.start();
  sockets[0].onopen();
  sockets[0].frame({ type: "snapshot", payload: state(10) });
  await ready;
  sockets[0].close();
  assert.equal(
    client.snapshot.version,
    10,
    "last frame remains readable while disconnected",
  );
  await new Promise((resolve) => setTimeout(resolve, 10));
  assert.equal(sockets.length, 2);
  sockets[1].onopen();
  sockets[1].frame({ type: "snapshot", payload: state(1, "restored-epoch") });
  assert.deepEqual(seen, [10, 1]);
  assert.deepEqual(
    sockets[1].sent.map((x) => x.type),
    ["auth"],
  );
  client.close();
});
