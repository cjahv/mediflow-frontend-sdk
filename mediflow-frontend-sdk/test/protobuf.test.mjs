import test from "node:test";
import assert from "node:assert/strict";
import { encode, decode } from "../src/protobuf.ts";
test("v4 typed auth cross-language golden", () => {
  const b = encode({ type: "auth", token: "abc" });
  assert.equal(Buffer.from(b).toString("hex"), "080452080a060a0400616263");
  assert.deepEqual(decode(b), { type: "auth", token: "abc" });
});
test("typed business fields roundtrip and protobuf defaults", () => {
  const v = decode(
    encode({
      type: "consume_result",
      payload: {
        requestId: "r",
        callId: "c",
        screenId: "s",
        granted: false,
        remaining: 0,
        text: "张三",
      },
    }),
  );
  assert.equal(v.payload.granted, false);
  assert.equal(v.payload.text, "张三");
  assert.equal(v.type, "consume_result");
});
test("reject legacy Value, JSON and malformed bytes", () => {
  for (const b of [
    [],
    [8, 0],
    [32, 1],
    [8, 3],
    [8, 2, 0x52, 0],
    [255, 255],
    new TextEncoder().encode('{"ok":true}'),
  ])
    assert.throws(() => decode(Uint8Array.from(b)));
});
test("reject wrong business scalar types and untyped payloads", () => {
  for (const v of [
    null,
    true,
    1,
    "hello",
    { x: true },
    { type: "consume_result", payload: { granted: "false" } },
    { type: "sync", page: Number.MAX_SAFE_INTEGER + 1 },
  ])
    assert.throws(() => encode(v));
});
test("unknown protobuf fields do not break older clients", () => {
  const b = encode({ ok: true });
  assert.equal(decode(Uint8Array.from([...b, 248, 7, 1])).ok, true);
});
test("large typed field", () => {
  const message = "汉".repeat(50000);
  assert.equal(decode(encode({ type: "error", message })).message, message);
});
test("optional boolean presence and unsigned bounds", () => {
  assert.deepEqual(decode(encode({})), {});
  assert.deepEqual(decode(encode({ dryRun: false })), { dryRun: false });
  assert.throws(() => encode({ type: "sync", page: -1 }));
});
test("encoders reject unknown application properties instead of dropping them", () => {
  assert.throws(
    () => encode({ type: "auth", token: "x", typo: true }),
    /Unknown protobuf field/,
  );
  assert.throws(
    () => encode({ requestId: "r", data: { queues: [], typo: 1 } }),
    /Unknown protobuf field/,
  );
});

// Read generated Packet.body directly, not the lossy generic object adapter.
import { mediflow } from "../src/generated/mediflow.js";
test("explicit page oneofs preserve empty and nonempty endpoint contracts", () => {
  const samples = {
    callPage: { id: "call", totalQuota: 1 },
    screenPage: { id: "s", name: "Screen" },
    consumptionPage: { requestId: "r", granted: false },
    auditPage: { sequence: 1, action: "test" },
    archivePage: { id: "a", sha256: "hash" },
    historyPage: { kind: "call", key: "call", payload: { id: "call" } },
  };
  for (const [kind, item] of Object.entries(samples))
    for (const items of [[], [item]]) {
      const page = { items, total: items.length, page: 1, pageSize: 20 };
      const bytes = encode(page, kind);
      assert.equal(mediflow.v4.Packet.decode(bytes).body, kind);
      if (items.length === 0) {
        const golden = {
          callPage: "0804a20106100018012014",
          screenPage: "0804aa0106100018012014",
          consumptionPage: "0804b20106100018012014",
          auditPage: "0804ba0106100018012014",
          archivePage: "0804c20106100018012014",
          historyPage: "0804ca0106100018012014",
        };
        assert.equal(Buffer.from(bytes).toString("hex"), golden[kind]);
      }
      assert.equal(decode(bytes, kind).items.length, items.length);
      assert.throws(() => decode(bytes, "result"), /Unexpected protobuf body/);
    }
  assert.throws(() => encode({ items: [], page: 1 }), /explicit/);
  assert.throws(() => encode({}, "invalidKind"), /Unknown protobuf body/);
});
