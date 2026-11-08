/** Generated business schemas are the only wire representation (protocol v4). */
import { mediflow } from "./generated/mediflow.js";
export const PROTOBUF_CONTENT_TYPE = "application/x-protobuf";
const Packet = mediflow.v4.Packet;
type ObjectValue = Record<string, any>;
const has = (o: ObjectValue, k: string): boolean =>
  Object.prototype.hasOwnProperty.call(o, k);
function validate(value: unknown, depth = 0): void {
  if (depth > 64) throw new Error("Protobuf nesting limit exceeded");
  if (
    typeof value === "number" &&
    (!Number.isFinite(value) ||
      (Number.isInteger(value) && !Number.isSafeInteger(value)))
  )
    throw new Error("Invalid or unsafe protobuf number");
  if (value && typeof value === "object")
    for (const [key, item] of Object.entries(value)) {
      if (key === "__proto__" || key === "prototype" || key === "constructor")
        throw new Error("Unsafe protobuf field");
      if (
        typeof item === "number" &&
        ["totalQuota", "consumed", "remaining", "page", "pageSize"].includes(
          key,
        ) &&
        (!Number.isInteger(item) || item < 0 || item > 4294967295)
      )
        throw new Error("Invalid unsigned protobuf number");
      validate(item, depth + 1);
    }
}
function frame(o: ObjectValue): ObjectValue {
  const t = o.type;
  if (typeof t !== "string") throw new Error("Frame type required");
  const body = { ...o };
  delete body.type;
  const arm = t.replace(/_([a-z])/g, (_: string, c: string) => c.toUpperCase());
  switch (t) {
    case "snapshot":
    case "consume_result":
      return { [arm]: o.payload };
    case "auth":
    case "sync":
    case "consume":
    case "playback":
    case "pending_sync":
    case "ping":
    case "calls":
    case "playback_result":
    case "pending_calls":
    case "error":
    case "pong":
      return { [arm]: body };
    default:
      throw new Error("Unknown frame type");
  }
}
function pack(o: ObjectValue): [string, ObjectValue] {
  if (has(o, "type")) return ["frame", frame(o)];
  if (has(o, "items")) throw new Error("Page contract must be explicit");
  if (has(o, "sequence")) return ["audit", o];
  if (has(o, "sha256")) return ["archive", o];
  if (has(o, "nextCursor")) return ["pendingCalls", o];
  if (has(o, "formatVersion")) return ["archiveBundle", o];
  if (has(o, "screen") && has(o, "state")) return ["screenDetail", o];
  if (has(o, "auditEvents")) return ["overview", o];
  if (has(o, "epoch") && has(o, "data")) return ["snapshot", o];
  if (has(o, "data")) return ["publish", o];
  if (has(o, "password")) return ["login", o];
  if (has(o, "username")) return ["user", o];
  if (has(o, "granted")) return ["consumption", o];
  if (has(o, "eventId") && has(o, "ok")) return ["playbackResult", o];
  if (has(o, "callId") && has(o, "status")) return ["playback", o];
  if (has(o, "callId") || has(o, "requestId")) return ["consume", o];
  if (has(o, "totalQuota")) return ["call", o];
  if (has(o, "id") && has(o, "name")) return ["screen", o];
  if (has(o, "moved")) return ["retained", o];
  if (has(o, "dryRun")) return ["retain", o];
  if (has(o, "error")) return ["problem", o];
  if (has(o, "status")) return ["health", o];
  if (has(o, "ok")) return ["result", o];
  if (has(o, "id")) return ["call", o];
  if (!Object.keys(o).length) return ["empty", o];
  throw new Error("No typed protobuf contract for object");
}
const bodyKinds = new Set([
  "frame",
  "snapshot",
  "screen",
  "call",
  "consumption",
  "audit",
  "archive",
  "callPage",
  "screenPage",
  "consumptionPage",
  "auditPage",
  "archivePage",
  "historyPage",
  "screenDetail",
  "overview",
  "archiveBundle",
  "login",
  "user",
  "publish",
  "consume",
  "playback",
  "playbackResult",
  "result",
  "problem",
  "health",
  "retain",
  "retained",
  "empty",
  "pendingCalls",
]);
function explicitBody(kind: string, value: ObjectValue): ObjectValue {
  if (!bodyKinds.has(kind)) throw new Error(`Unknown protobuf body ${kind}`);
  if (kind === "historyPage")
    return {
      ...value,
      items: value.items.map((item: ObjectValue) => {
        const result: ObjectValue = { ...item, [item.kind]: item.payload };
        delete result.payload;
        return result;
      }),
    };
  return value;
}
export function encode(value: unknown, explicitKind?: string): Uint8Array {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("Typed protobuf business object required");
  validate(value);
  const [kind, body] = explicitKind
    ? [explicitKind, explicitBody(explicitKind, value as ObjectValue)]
    : pack(value as ObjectValue);
  const input = transformCompact(
    "Packet",
    { protocolVersion: 4, [kind]: body },
    false,
  );
  const problem = Packet.verify(input);
  if (problem) throw new Error(problem);
  const message = Packet.fromObject(input);
  assertKnown(
    input,
    Packet.toObject(message, { defaults: true, arrays: true, objects: true }),
  );
  return Packet.encode(message).finish();
}
export function decode(
  bytes: Uint8Array | ArrayBuffer,
  expectedKind?: string,
): any {
  if (!(bytes instanceof Uint8Array) && !(bytes instanceof ArrayBuffer))
    throw new Error("Binary protobuf frame required");
  const packet = Packet.decode(
    bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes),
  );
  if (packet.protocolVersion !== 4 || !packet.body)
    throw new Error("Unsupported protobuf protocol version or body");
  const obj: ObjectValue = transformCompact(
    "Packet",
    Packet.toObject(packet, {
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      oneofs: false,
    }),
    true,
  );
  const kind = packet.body;
  if (expectedKind && kind !== expectedKind)
    throw new Error(
      `Unexpected protobuf body ${kind}; expected ${expectedKind}`,
    );
  let body = obj[kind];
  if (kind === "frame") {
    const arm = (packet.frame as mediflow.v4.Frame | undefined)?.body;
    if (!arm) throw new Error("Frame body required");
    const type = arm.replace(/[A-Z]/g, (c: string) => "_" + c.toLowerCase());
    body =
      type === "snapshot" || type === "consume_result"
        ? { type, payload: body[arm] }
        : { ...body[arm], type };
  }
  if (kind === "historyPage")
    body.items = body.items.map((item: ObjectValue) => {
      const result: ObjectValue = { ...item, payload: item[item.kind] };
      delete result[item.kind];
      return result;
    });
  validate(body);
  return body;
}

// Static protobuf encoders otherwise silently drop unknown object properties.
// Binary unknown fields remain forward-compatible on decode.
function assertKnown(input: unknown, normalized: unknown): void {
  if (!input || typeof input !== "object") return;
  const target = normalized as ObjectValue | undefined;
  for (const [key, value] of Object.entries(input)) {
    if (!target || !Object.prototype.hasOwnProperty.call(target, key))
      throw new Error(`Unknown protobuf field: ${key}`);
    assertKnown(value, target[key]);
  }
}

const wireSchema: Record<string, Record<string, [string, string]>> = {
  Person: { id: ["bytes", "one"] },
  Section: { id: ["bytes", "one"], persons: ["Person", "list"] },
  Queue: { id: ["bytes", "one"], sections: ["Section", "list"] },
  Template: { queues: ["Queue", "list"] },
  Snapshot: {
    epoch: ["bytes", "one"],
    screenId: ["bytes", "one"],
    data: ["Template", "one"],
  },
  Screen: { id: ["bytes", "one"], token: ["bytes", "one"] },
  Call: {
    id: ["bytes", "one"],
    queueId: ["bytes", "one"],
    personId: ["bytes", "one"],
    targets: ["bytes", "list"],
  },
  Consumption: {
    requestId: ["bytes", "one"],
    callId: ["bytes", "one"],
    screenId: ["bytes", "one"],
  },
  Audit: {
    id: ["bytes", "one"],
    screenId: ["bytes", "one"],
    callId: ["bytes", "one"],
    requestId: ["bytes", "one"],
  },
  Archive: { id: ["bytes", "one"] },
  Target: { screenId: ["bytes", "one"], callId: ["bytes", "one"] },
  HistoryItem: {
    snapshot: ["Snapshot", "one"],
    consumption: ["Consumption", "one"],
    audit: ["Audit", "one"],
    call: ["Call", "one"],
    target: ["Target", "one"],
    playback: ["PlaybackEvent", "one"],
  },
  CallPage: { items: ["Call", "list"] },
  ScreenPage: { items: ["Screen", "list"] },
  ConsumptionPage: { items: ["Consumption", "list"] },
  AuditPage: { items: ["Audit", "list"] },
  ArchivePage: { items: ["Archive", "list"] },
  HistoryPage: { items: ["HistoryItem", "list"] },
  ScreenDetail: {
    screen: ["Screen", "one"],
    state: ["Snapshot", "one"],
    calls: ["CallPage", "one"],
  },
  Overview: {},
  ArchiveBundle: {
    screens: ["Screen", "list"],
    states: ["Snapshot", "map"],
    snapshotHistory: ["Snapshot", "map"],
    calls: ["Call", "map"],
    consumptions: ["Consumption", "map"],
    audit: ["Audit", "list"],
    checkpoints: ["Archive", "list"],
    epoch: ["bytes", "one"],
  },
  Login: {},
  User: {},
  Publish: { requestId: ["bytes", "one"], data: ["Template", "one"] },
  Consume: { requestId: ["bytes", "one"], callId: ["bytes", "one"] },
  Playback: {
    eventId: ["bytes", "one"],
    requestId: ["bytes", "one"],
    callId: ["bytes", "one"],
  },
  PlaybackResult: {
    eventId: ["bytes", "one"],
    requestId: ["bytes", "one"],
    callId: ["bytes", "one"],
  },
  Result: {},
  Problem: {},
  Health: {},
  Retain: {},
  Retained: {},
  Auth: { token: ["bytes", "one"] },
  Sync: {},
  PendingSync: { requestId: ["bytes", "one"] },
  PendingCalls: {
    payload: ["Call", "list"],
    requestId: ["bytes", "one"],
    screenId: ["bytes", "one"],
  },
  CallFrame: { payload: ["Call", "list"] },
  Failure: { requestId: ["bytes", "one"], eventId: ["bytes", "one"] },
  Empty: {},
  Frame: {
    auth: ["Auth", "one"],
    sync: ["Sync", "one"],
    consume: ["Consume", "one"],
    playback: ["Playback", "one"],
    pendingSync: ["PendingSync", "one"],
    ping: ["Empty", "one"],
    snapshot: ["Snapshot", "one"],
    calls: ["CallFrame", "one"],
    consumeResult: ["Consumption", "one"],
    playbackResult: ["PlaybackResult", "one"],
    pendingCalls: ["PendingCalls", "one"],
    error: ["Failure", "one"],
    pong: ["Empty", "one"],
  },
  Packet: {
    frame: ["Frame", "one"],
    snapshot: ["Snapshot", "one"],
    screen: ["Screen", "one"],
    call: ["Call", "one"],
    consumption: ["Consumption", "one"],
    audit: ["Audit", "one"],
    archive: ["Archive", "one"],
    callPage: ["CallPage", "one"],
    screenPage: ["ScreenPage", "one"],
    consumptionPage: ["ConsumptionPage", "one"],
    auditPage: ["AuditPage", "one"],
    archivePage: ["ArchivePage", "one"],
    historyPage: ["HistoryPage", "one"],
    screenDetail: ["ScreenDetail", "one"],
    overview: ["Overview", "one"],
    archiveBundle: ["ArchiveBundle", "one"],
    login: ["Login", "one"],
    user: ["User", "one"],
    publish: ["Publish", "one"],
    consume: ["Consume", "one"],
    playback: ["Playback", "one"],
    playbackResult: ["PlaybackResult", "one"],
    result: ["Result", "one"],
    problem: ["Problem", "one"],
    health: ["Health", "one"],
    retain: ["Retain", "one"],
    retained: ["Retained", "one"],
    empty: ["Empty", "one"],
    pendingCalls: ["PendingCalls", "one"],
  },
  PlaybackEvent: {
    screenId: ["bytes", "one"],
    eventId: ["bytes", "one"],
    requestId: ["bytes", "one"],
    callId: ["bytes", "one"],
  },
};
const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const randomPattern = /^[0-9a-f]{48}$/;
const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
export function encodeIdentifier(value: string): Uint8Array {
  if (typeof value !== "string") throw new Error("Identifier text required");
  let kind = 0,
    raw: Uint8Array;
  if (uuidPattern.test(value) || randomPattern.test(value)) {
    kind = uuidPattern.test(value) ? 1 : 2;
    const hex = value.replaceAll("-", "");
    raw = Uint8Array.from(hex.match(/../g)!, (pair) => parseInt(pair, 16));
  } else {
    raw = utf8Encoder.encode(value);
    if (raw.length > 4096 || utf8Decoder.decode(raw) !== value)
      throw new Error("Invalid identifier UTF-8 or size");
  }
  return Uint8Array.from([kind, ...raw]);
}
export function decodeIdentifier(bytes: Uint8Array): string {
  if (!(bytes instanceof Uint8Array) || !bytes.length || bytes.length > 4097)
    throw new Error("Invalid compact identifier size");
  let value: string;
  const kind = bytes[0];
  if (kind === 0) value = utf8Decoder.decode(bytes.subarray(1));
  else if (
    (kind === 1 && bytes.length === 17) ||
    (kind === 2 && bytes.length === 25)
  ) {
    const hex = Array.from(bytes.subarray(1), (b) =>
      b.toString(16).padStart(2, "0"),
    ).join("");
    value =
      kind === 1
        ? `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
        : hex;
  } else throw new Error("Invalid compact identifier kind or length");
  const canonical = encodeIdentifier(value);
  if (
    canonical.length !== bytes.length ||
    canonical.some((v, i) => v !== bytes[i])
  )
    throw new Error("Noncanonical compact identifier");
  return value;
}
function transformCompact(
  type: string,
  value: ObjectValue,
  decoding: boolean,
  depth = 0,
): ObjectValue {
  if (depth > 64) throw new Error("Protobuf nesting limit exceeded");
  const result: ObjectValue = { ...value };
  for (const [key, [child, rule]] of Object.entries(wireSchema[type] || {})) {
    if (!has(value, key) || value[key] == null) continue;
    const convert = (item: any): any =>
      child === "bytes"
        ? decoding
          ? decodeIdentifier(item)
          : encodeIdentifier(item)
        : transformCompact(child, item, decoding, depth + 1);
    if (rule === "list") result[key] = value[key].map(convert);
    else if (rule === "map")
      result[key] = Object.fromEntries(
        Object.entries(value[key]).map(([k, v]) => [k, convert(v)]),
      );
    else result[key] = convert(value[key]);
  }
  return result;
}
