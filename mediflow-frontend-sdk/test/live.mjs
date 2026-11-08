// Run ONLY against disposable test data:
// MEDIFLOW_URL=http://127.0.0.1:9999 MEDIFLOW_ADMIN_USER=... MEDIFLOW_ADMIN_PASSWORD=... node test/live.mjs
import assert from "node:assert/strict";
import { ScreenClient, encode, decode } from "../dist/index.js";
import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";
const base =
  (process.env.MEDIFLOW_URL ?? "http://127.0.0.1:9999")
    .replace(/\/$/, "")
    .replace(/\/mediflow$/, "") + "/mediflow";
const user = process.env.MEDIFLOW_ADMIN_USER,
  password = process.env.MEDIFLOW_ADMIN_PASSWORD;
if (!user || !password)
  throw new Error("Set test admin credentials in environment");
// This fixture uses a persistent Java process to invoke the real gRPC SDK.
// The stdio protocol is test-only; no HTTP producer fallback exists.
const sdkDir = fileURLToPath(
  new URL("../../mediflow-backend-sdk/", import.meta.url),
);
const classpath = `${sdkDir}target/test-classes:${sdkDir}target/classes:${readFileSync(`${sdkDir}target/live-classpath.txt`, "utf8").trim()}`;
const bridge = spawn(
  "java",
  ["-cp", classpath, "com.cjahv.mediflow.GrpcBridge"],
  { stdio: ["pipe", "pipe", "inherit"] },
);
const requests = [];
const lines = createInterface({ input: bridge.stdout });
lines.on("line", (line) => {
  const request = requests.shift();
  if (!request) return;
  const [kind, encoded] = line.split("\t");
  if (kind === "OK") request.resolve(decode(Buffer.from(encoded, "base64")));
  else
    request.reject(
      new Error(Buffer.from(encoded ?? "", "base64").toString("utf8")),
    );
});
bridge.on("exit", (code) => {
  for (const request of requests.splice(0))
    request.reject(new Error(`Java gRPC bridge exited: ${code}`));
});
bridge.on("error", (error) => {
  for (const request of requests.splice(0)) request.reject(error);
});
function grpc(operation, token, body = {}) {
  return new Promise((resolve, reject) => {
    requests.push({ resolve, reject });
    bridge.stdin.write(
      `${operation}\t${token}\t${Buffer.from(encode(body)).toString("base64")}\n`,
    );
  });
}
let cookie = "";
async function api(path, body) {
  const response = await fetch(base + path, {
    method: body === undefined ? "GET" : "POST",
    headers: {
      "Content-Type": "application/x-protobuf",
      Accept: "application/x-protobuf",
      Cookie: cookie,
    },
    ...(body === undefined ? {} : { body: encode(body) }),
  });
  if (response.headers.get("set-cookie"))
    cookie = response.headers.get("set-cookie").split(";")[0];
  const result = decode(await response.arrayBuffer());
  if (!response.ok)
    throw new Error(`${path}: ${response.status}: ${JSON.stringify(result)}`);
  return result;
}
await api("/api/admin/login", { username: user, password });
const run = Date.now().toString();
const a = await api("/api/admin/screens", {
  id: "sdk-a-" + run,
  name: "SDK 测试 A",
});
const b = await api("/api/admin/screens", {
  id: "sdk-b-" + run,
  name: "SDK 测试 B",
});
if (process.env.MEDIFLOW_TEST_TOKEN_FILE)
  await writeFile(process.env.MEDIFLOW_TEST_TOKEN_FILE, a.token, {
    mode: 0o600,
  });
const template = {
  queues: [
    {
      id: "general",
      name: "普通门诊",
      sections: [
        {
          id: "calling",
          name: "当前叫号",
          persons: [
            { id: "p1", name: "合成测试人员", order: 1, displayNumber: "A001" },
          ],
        },
        { id: "waiting", name: "等待叫号", persons: [] },
      ],
    },
    {
      id: "expert",
      name: "专家门诊",
      sections: [{ id: "custom", name: "任意分区", persons: [] }],
    },
  ],
};
const clients = [];
function screen(token, onPendingCalls) {
  const snapshots = [],
    errors = [],
    acks = [];
  const client = new ScreenClient({
    baseURL: base,
    token,
    onSnapshot: (s) => snapshots.push(s),
    onPendingCalls,
    onPlaybackResult: (a) => acks.push(a),
    onError: (e) => errors.push(e.message),
  });
  clients.push(client);
  const online = client.start();
  online.catch(() => {});
  return { client, online, snapshots, errors, acks };
}
const timeout = (ms = 5000) =>
  new Promise((_, reject) => {
    const t = setTimeout(() => reject(new Error("timeout")), ms);
    t.unref();
  });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const check = async (fn) => {
  for (let i = 0; i < 100; i++) {
    if (fn()) return;
    await wait(25);
  }
  throw new Error("condition not observed");
};
try {
  const ca = screen(a.token),
    cb = screen(b.token);
  await Promise.race([Promise.all([ca.online, cb.online]), timeout()]);
  const published = await grpc("publish", a.token, {
    requestId: "pub-" + run,
    data: template,
  });
  await grpc("publish", b.token, { requestId: "pub-" + run, data: template });
  await check(
    () =>
      ca.snapshots.at(-1)?.version === published.version &&
      ca.snapshots.at(-1)?.data.queues.length === 2,
  );
  const call = {
    id: "call-" + run,
    queueId: "general",
    personId: "p1",
    text: "请 A001 到一号诊室",
    totalQuota: 2,
  };
  await grpc("call", a.token, call);
  await grpc("call", b.token, call);
  const operation = ca.client.createConsumption(call.id, "a1-" + run);
  const first = await operation.execute();
  assert.equal(first.granted, true);
  assert.equal(first.remaining, 1);
  const replay = await operation.execute();
  assert.deepEqual(replay, first);
  const second = await ca.client.consume(call.id, "a2-" + run);
  assert.equal(second.remaining, 0);
  const exhausted = await ca.client.consume(call.id, "a3-" + run);
  assert.equal(exhausted.granted, false);
  const independent = await cb.client.consume(call.id, "b1-" + run);
  assert.equal(independent.granted, true);
  assert.equal(independent.remaining, 1);
  await ca.client.reportPlayback(call.id, "a1-" + run, "started");
  await ca.client.reportPlayback(call.id, "a1-" + run, "completed");
  await check(
    () => ca.acks.filter((x) => x.requestId === "a1-" + run).length === 2,
  );
  const audit = (
    await api(
      "/api/admin/audit?page=1&pageSize=100&q=" + encodeURIComponent(run),
    )
  ).items;
  assert.ok(
    audit.some(
      (e) => e.requestId === "a1-" + run && e.action === "playback.completed",
    ),
  );
  const raceCall = { ...call, id: "race-" + run, totalQuota: 1 };
  await grpc("call", a.token, raceCall);
  const races = await Promise.all(
    Array.from({ length: 8 }, (_, i) =>
      ca.client.consume(raceCall.id, "race-" + run + "-" + i),
    ),
  );
  assert.equal(races.filter((r) => r.granted).length, 1);
  // Negative outcomes must be attributable and never grant quota.
  const expiredCall = {
    ...call,
    id: "expired-" + run,
    expiresAt: "2000-01-01T00:00:00Z",
  };
  await grpc("call", a.token, expiredCall);
  const expired = await ca.client.consume(expiredCall.id, "expired-" + run);
  assert.equal(expired.granted, false);
  assert.equal(expired.reason, "expired");
  const cancelledCall = { ...call, id: "cancelled-" + run };
  await grpc("call", a.token, cancelledCall);
  await api("/api/admin/calls/" + cancelledCall.id + "/cancel", {});
  const cancelled = await ca.client.consume(
    cancelledCall.id,
    "cancelled-" + run,
  );
  assert.equal(cancelled.granted, false);
  assert.equal(cancelled.reason, "cancelled");
  const untargeted = await cb.client.consume(raceCall.id, "untargeted-" + run);
  assert.equal(untargeted.granted, false);
  assert.equal(untargeted.reason, "not_found");
  await assert.rejects(ca.client.consume(raceCall.id, "a1-" + run), /conflict/);
  await assert.rejects(
    ca.client.reportPlayback(call.id, "a3-" + run, "completed"),
    /no successful consumption/,
  );
  const invalid = await fetch(base + "/api/screen/state", {
    headers: { Authorization: "Bearer invalid-test-token" },
  });
  assert.equal(invalid.status, 404);
  await assert.rejects(grpc("state", "invalid-test-token"), /UNAUTHENTICATED/);
  const rejected = screen("invalid-test-token");
  await check(() => rejected.errors.some((e) => e.includes("Authentication")));
  const finalAudit = (
    await api(
      "/api/admin/audit?page=1&pageSize=100&q=" + encodeURIComponent(run),
    )
  ).items;
  for (const requestId of [
    "expired-" + run,
    "cancelled-" + run,
    "untargeted-" + run,
  ])
    assert.ok(
      finalAudit.some(
        (e) => e.requestId === requestId && e.action === "call.consumed",
      ),
    );
  ca.client.close();
  const reconnect = screen(a.token);
  await Promise.race([reconnect.online, timeout()]);
  assert.equal(reconnect.client.snapshot.data.queues.length, 2);
  assert.equal(
    (await grpc("calls:1:100", a.token)).items.find((c) => c.id === call.id)
      .remaining,
    0,
  );
  // Pending discovery must be independent of audit history page and exceed one batch.
  const pendingScreen = await api("/api/admin/screens", {
    id: "pending-" + run,
    name: "Pending cursor test",
  });
  for (let i = 0; i < 125; i++)
    await grpc("call", pendingScreen.token, {
      ...call,
      id: `pending-${run}-${i}`,
      totalQuota: 1,
    });
  const seen = new Map();
  const jobs = [];
  const pendingClient = screen(pendingScreen.token, (calls) => {
    for (const candidate of calls) {
      if (seen.has(candidate.id)) continue;
      seen.set(candidate.id, true);
      // Sequential handling within each callback is not required for cursor correctness.
      jobs.push(
        pendingClient.client
          .createConsumption(candidate.id, `pending-consume-${candidate.id}`)
          .execute(),
      );
    }
  });
  await pendingClient.online;
  pendingClient.client.sync(4, 1);
  await check(() => seen.size === 125);
  const pendingResults = await Promise.all(jobs);
  assert.equal(pendingResults.filter((x) => x.granted).length, 125);
  assert.equal((await grpc("calls:1:100", pendingScreen.token)).total, 125);
  console.log(
    JSON.stringify(
      {
        result: "PASS",
        checks: [
          "real WS authentication",
          "125 pending calls discovered independently from history pagination",
          "two-queue template mirror",
          "same request id deduplication",
          "quota exhausted rejection",
          "independent screen counters",
          "playback completion audit persisted",
          "8 concurrent requests cannot overdraw quota",
          "reconnect full snapshot",
          "expired and cancelled call denial with audit",
          "non-targeted screen denial with audit",
          "request ID conflict rejected",
          "unsuccessful playback error feedback",
          "removed HTTP producer endpoint returns 404; gRPC and WS reject invalid authentication",
        ],
        screens: [a.id, b.id],
        version: published.version,
        callId: call.id,
      },
      null,
      2,
    ),
  );
} finally {
  for (const client of clients) client.close();
  bridge.stdin.end();
  lines.close();
  bridge.kill();
}
