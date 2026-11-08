import { test } from "node:test";
import assert from "node:assert/strict";
import { ScreenClient, encode, decode } from "../dist/index.js";
const tick = () => new Promise((resolve) => setTimeout(resolve, 0));
const call = (id = "call-1", remaining = 1) => ({
  id,
  queueId: "q1",
  personId: "p1",
  text: "old text",
  totalQuota: remaining,
  consumed: 0,
  remaining,
  active: true,
});
function setup({
  consume,
  play,
  auditReject = false,
  brokenView = false,
  maxAuditEvents,
  retryMs,
  retryMaxMs,
} = {}) {
  const state = {
    sent: [],
    played: [],
    issues: [],
    snapshots: [],
    history: [],
    statuses: [],
    consumes: 0,
  };
  const socket = {
    readyState: 1,
    send(bytes) {
      const m = decode(bytes);
      state.sent.push(m);
      if (m.type === "pending_sync") state.pendingId = m.requestId;
      if (m.type === "consume") {
        state.consumes++;
        const result = consume?.(m, state.consumes);
        if (result !== null)
          queueMicrotask(() =>
            frame({
              type: "consume_result",
              payload: {
                requestId: m.requestId,
                callId: m.callId,
                screenId: "screen-1",
                granted: true,
                remaining: 0,
                text: "authoritative text",
                ...result,
              },
            }),
          );
      }
      if (m.type === "playback")
        queueMicrotask(() =>
          frame(
            auditReject
              ? {
                  type: "error",
                  eventId: m.eventId,
                  message: "audit unavailable",
                }
              : {
                  type: "playback_result",
                  eventId: m.eventId,
                  callId: m.callId,
                  requestId: m.requestId,
                  status: m.status,
                  ok: true,
                },
          ),
        );
    },
    close() {
      this.readyState = 3;
      this.onclose?.({ code: 1000 });
    },
  };
  const frame = (message) => socket.onmessage?.({ data: encode(message) });
  const app = new ScreenClient({
    baseURL: "http://localhost:8080",
    token: "test-only",
    requestTimeoutMs: 30,
    reconnectMs: 1,
    reconnectMaxMs: 2,
    webSocketFactory: () => socket,
    playback: {
      maxAuditEvents,
      retryMs,
      retryMaxMs,
      play: async (text) => {
        state.played.push(text);
        await play?.(text);
      },
      onConsumption: () => {},
    },
    onSnapshot: (snapshot) => {
      state.snapshots.push(snapshot);
      if (brokenView) throw Error("UI failure");
    },
    onCalls: (calls, page) => state.history.push({ calls, page }),
    onStatus: (status) => state.statuses.push(status),
    onError: (error) => state.issues.push({ error }),
  });
  async function start() {
    const ready = app.start();
    socket.onopen();
    frame({
      type: "snapshot",
      payload: {
        screenId: "screen-1",
        epoch: "e1",
        version: 1,
        templateVersion: "1",
        data: { queues: [] },
      },
    });
    await ready;
  }
  function candidates(calls) {
    frame({
      type: "pending_calls",
      requestId: state.pendingId,
      screenId: "screen-1",
      payload: calls,
      nextCursor: "",
    });
  }
  return { app, state, socket, frame, start, candidates };
}
test("SDK playback authenticates automatically, renders data, and never plays history", async () => {
  const x = setup();
  try {
    await x.start();
    assert.equal(x.state.sent[0].type, "auth");
    assert.equal(x.state.snapshots.length, 1);
    x.frame({
      type: "calls",
      payload: [call()],
      page: 1,
      pageSize: 20,
      total: 1,
    });
    await tick();
    assert.equal(x.state.played.length, 0);
    x.candidates([call(), call()]);
    await tick();
    await tick();
    assert.deepEqual(x.state.played, ["authoritative text"]);
    assert.deepEqual(
      x.state.sent.filter((x) => x.type === "playback").map((x) => x.status),
      ["started", "completed"],
    );
    const snapshot = x.app.snapshot;
    snapshot.data.queues.push({});
    assert.equal(x.app.snapshot.data.queues.length, 0);
  } finally {
    x.app.close();
  }
});
test("SDK playback preserves uncertain consumption ID for an immediate explicit retry", async () => {
  const x = setup({ consume: (_m, n) => (n === 1 ? null : {}) });
  try {
    await x.start();
    x.candidates([call()]);
    await new Promise((r) => setTimeout(r, 45));
    assert.equal(x.state.played.length, 0);
    assert.ok(x.app.playbackState.uncertain);
    x.candidates([call()]);
    await tick();
    assert.equal(x.state.consumes, 1);
    await x.app.retryConsumption();
    const attempts = x.state.sent.filter((x) => x.type === "consume");
    assert.equal(attempts.length, 2);
    assert.equal(attempts[0].requestId, attempts[1].requestId);
    assert.equal(x.state.played.length, 1);
    assert.equal(x.app.playbackState.uncertain, undefined);
  } finally {
    x.app.close();
  }
});
test("business rejection never plays; audio failure pauses and is not replayed", async () => {
  const denied = setup({
    consume: () => ({ granted: false, reason: "no quota" }),
  });
  try {
    await denied.start();
    denied.candidates([call()]);
    await tick();
    assert.equal(denied.state.played.length, 0);
    assert.equal(denied.app.playbackState.uncertain, undefined);
  } finally {
    denied.app.close();
  }
  const x = setup({
    play: async () => {
      throw Error("device failure");
    },
  });
  try {
    await x.start();
    x.candidates([call()]);
    await tick();
    await tick();
    assert.equal(x.app.playbackState.status === "paused", true);
    assert.equal(x.state.played.length, 1);
    assert.deepEqual(
      x.state.sent.filter((x) => x.type === "playback").map((x) => x.status),
      ["started", "failed"],
    );
    await x.app.retryConsumption();
    assert.equal(x.state.played.length, 1);
  } finally {
    x.app.close();
  }
});
test("audit retries preserve event IDs and never replay audio", async () => {
  const x = setup({ auditReject: true });
  try {
    await x.start();
    x.candidates([call()]);
    await tick();
    await tick();
    assert.equal(x.app.playbackState.failedAuditCount, 2);
    await x.app.retryPlaybackReports();
    const events = x.state.sent.filter((x) => x.type === "playback");
    assert.equal(events[0].eventId, events[2].eventId);
    assert.equal(events[1].eventId, events[3].eventId);
    assert.equal(x.state.played.length, 1);
  } finally {
    x.app.close();
  }
});
test("remaining quota refreshes candidates and uses a new ID for the next playback", async () => {
  const x = setup({ consume: (_m, n) => ({ remaining: n === 1 ? 1 : 0 }) });
  try {
    await x.start();
    x.candidates([call("call-1", 2)]);
    await tick();
    await tick();
    x.candidates([call("call-1", 1)]);
    await tick();
    await tick();
    assert.equal(x.state.played.length, 2);
    const attempts = x.state.sent.filter((x) => x.type === "consume");
    assert.notEqual(attempts[0].requestId, attempts[1].requestId);
  } finally {
    x.app.close();
  }
});
test("view exceptions do not break SDK readiness and close stops new consumption", async () => {
  const x = setup({ brokenView: true });
  await x.start();
  assert.equal(x.app.isConnected, true);
  x.app.close();
  x.candidates([call()]);
  await tick();
  assert.equal(x.state.consumes, 0);
});

test("SDK retries uncertain consumption after reconnect with the same ID", async () => {
  const x = setup({ consume: (_m, n) => (n === 1 ? null : {}) });
  try {
    await x.start();
    x.candidates([call()]);
    await tick();
    const first = x.state.sent.find((m) => m.type === "consume");
    x.socket.onclose({ code: 1013 });
    await new Promise((r) => setTimeout(r, 10));
    x.socket.onopen();
    x.frame({
      type: "snapshot",
      payload: {
        screenId: "screen-1",
        epoch: "e1",
        version: 1,
        templateVersion: "1",
        data: { queues: [] },
      },
    });
    await tick();
    await tick();
    const attempts = x.state.sent.filter((m) => m.type === "consume");
    assert.equal(attempts.length, 2);
    assert.equal(attempts[1].requestId, first.requestId);
    assert.equal(x.state.played.length, 1);
  } finally {
    x.app.close();
  }
});

test("SDK bounds failed audit buffer before consuming new quota", async () => {
  const x = setup({ auditReject: true, maxAuditEvents: 2 });
  try {
    await x.start();
    x.candidates([call("a"), call("b")]);
    await tick();
    await tick();
    await tick();
    assert.equal(x.state.consumes, 1);
    assert.equal(x.state.played.length, 1);
    assert.equal(x.app.playbackState.failedAuditCount, 2);
    assert.equal(x.app.playbackState.status, "paused");
    assert.equal(x.app.playbackState.queued, 1);
  } finally {
    x.app.close();
  }
});

test("SDK refreshes quota updates received while the same call is playing", async () => {
  let finish;
  const audio = new Promise((r) => {
    finish = r;
  });
  const x = setup({ play: () => audio });
  try {
    await x.start();
    x.candidates([call()]);
    await tick();
    assert.equal(x.state.played.length, 1);
    x.app.refreshPendingCalls();
    x.candidates([call("call-1", 2)]);
    const before = x.state.sent.filter((m) => m.type === "pending_sync").length;
    finish();
    await tick();
    await tick();
    assert.equal(
      x.state.sent.filter((m) => m.type === "pending_sync").length,
      before + 1,
    );
  } finally {
    finish();
    x.app.close();
  }
});

test("unattended online consumption retries its original ID and plays once", async () => {
  const x = setup({
    consume: (_m, n) => (n < 3 ? null : {}),
    retryMs: 5,
    retryMaxMs: 10,
  });
  try {
    await x.start();
    x.candidates([call()]);
    await new Promise((r) => setTimeout(r, 180));
    const attempts = x.state.sent.filter((m) => m.type === "consume");
    assert.equal(attempts.length, 3);
    assert.equal(new Set(attempts.map((m) => m.requestId)).size, 1);
    assert.equal(x.state.played.length, 1);
    assert.equal(x.app.playbackState.status, "idle");
  } finally {
    x.app.close();
  }
});
test("close cancels scheduled uncertain-consumption recovery", async () => {
  const x = setup({ consume: () => null, retryMs: 80, retryMaxMs: 80 });
  await x.start();
  x.candidates([call()]);
  await new Promise((r) => setTimeout(r, 35));
  assert.equal(x.app.playbackState.status, "uncertain");
  x.app.close();
  await new Promise((r) => setTimeout(r, 100));
  assert.equal(x.state.consumes, 1);
  assert.equal(x.state.played.length, 0);
});
