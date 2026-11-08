import test from "node:test";
import assert from "node:assert/strict";
import {
  encodeIdentifier,
  decodeIdentifier,
  encode,
  decode,
} from "../src/protobuf.ts";
import { mediflow } from "../src/generated/mediflow.js";
const uuid = "12345678-1234-4234-8234-123456789abc";
test("compact fields preserve spelling, arbitrary UTF8 and every token bit", () => {
  for (const value of [
    "",
    uuid,
    uuid.toUpperCase(),
    "00001",
    "外部-Ä-01",
    "\ufeffid",
    "a".repeat(48),
    "x".repeat(256),
  ])
    assert.equal(decodeIdentifier(encodeIdentifier(value)), value);
  for (let i = 0; i < 256; i++) {
    const bytes = Uint8Array.from([2, ...Array(24).fill(i)]);
    assert.deepEqual(encodeIdentifier(decodeIdentifier(bytes)), bytes);
  }
  assert.equal(encodeIdentifier(uuid).length, 17);
  assert.equal(encodeIdentifier("a".repeat(48)).length, 25);
});
test("malformed compact data and old v3 fail closed", () => {
  for (const raw of [
    [],
    [3],
    [1, 2],
    [2, ...Array(25).fill(0)],
    [0, 255],
    [0, 192, 128],
    [0, ...new TextEncoder().encode(uuid)],
    [0, ...new TextEncoder().encode("a".repeat(48))],
  ])
    assert.throws(() => decodeIdentifier(Uint8Array.from(raw)));
  assert.throws(() => encodeIdentifier("\ud800"));
  assert.throws(() => encodeIdentifier("x".repeat(4097)));
  const packet = mediflow.v4.Packet.encode({
    protocolVersion: 4,
    frame: { auth: { token: Uint8Array.from([9]) } },
  }).finish();
  assert.throws(() => decode(packet));
  assert.throws(() =>
    decode(Uint8Array.from([8, 3, 82, 7, 10, 5, 10, 3, 97, 98, 99])),
  );
});
test("business UTF8 IDs roundtrip without normalizing or numeric conversion", () => {
  for (const id of ["00001", "外部-Ä-01", uuid.toUpperCase(), uuid]) {
    const v = { type: "consume", requestId: id, callId: id };
    assert.deepEqual(decode(encode(v)), v);
  }
});
