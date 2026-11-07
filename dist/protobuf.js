/** Generated business schemas are the only wire representation (protocol v3). */
import { mediflow } from "./generated/mediflow.js";
export const PROTOBUF_CONTENT_TYPE = "application/x-protobuf";
const Packet = mediflow.v3.Packet;
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
function validate(value, depth = 0) {
    if (depth > 64)
        throw new Error("Protobuf nesting limit exceeded");
    if (typeof value === "number" &&
        (!Number.isFinite(value) ||
            (Number.isInteger(value) && !Number.isSafeInteger(value))))
        throw new Error("Invalid or unsafe protobuf number");
    if (value && typeof value === "object")
        for (const [key, item] of Object.entries(value)) {
            if (key === "__proto__" || key === "prototype" || key === "constructor")
                throw new Error("Unsafe protobuf field");
            if (typeof item === "number" &&
                ["totalQuota", "consumed", "remaining", "page", "pageSize"].includes(key) &&
                (!Number.isInteger(item) || item < 0 || item > 4294967295))
                throw new Error("Invalid unsigned protobuf number");
            validate(item, depth + 1);
        }
}
function frame(o) {
    const t = o.type;
    if (typeof t !== "string")
        throw new Error("Frame type required");
    const body = { ...o };
    delete body.type;
    const arm = t.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
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
function pack(o) {
    if (has(o, "type"))
        return ["frame", frame(o)];
    if (has(o, "items"))
        throw new Error("Page contract must be explicit");
    if (has(o, "sequence"))
        return ["audit", o];
    if (has(o, "sha256"))
        return ["archive", o];
    if (has(o, "nextCursor"))
        return ["pendingCalls", o];
    if (has(o, "formatVersion"))
        return ["archiveBundle", o];
    if (has(o, "screen") && has(o, "state"))
        return ["screenDetail", o];
    if (has(o, "auditEvents"))
        return ["overview", o];
    if (has(o, "epoch") && has(o, "data"))
        return ["snapshot", o];
    if (has(o, "data"))
        return ["publish", o];
    if (has(o, "password"))
        return ["login", o];
    if (has(o, "username"))
        return ["user", o];
    if (has(o, "granted"))
        return ["consumption", o];
    if (has(o, "eventId") && has(o, "ok"))
        return ["playbackResult", o];
    if (has(o, "callId") && has(o, "status"))
        return ["playback", o];
    if (has(o, "callId") || has(o, "requestId"))
        return ["consume", o];
    if (has(o, "totalQuota"))
        return ["call", o];
    if (has(o, "id") && has(o, "name"))
        return ["screen", o];
    if (has(o, "moved"))
        return ["retained", o];
    if (has(o, "dryRun"))
        return ["retain", o];
    if (has(o, "error"))
        return ["problem", o];
    if (has(o, "status"))
        return ["health", o];
    if (has(o, "ok"))
        return ["result", o];
    if (has(o, "id"))
        return ["call", o];
    if (!Object.keys(o).length)
        return ["empty", o];
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
function explicitBody(kind, value) {
    if (!bodyKinds.has(kind))
        throw new Error(`Unknown protobuf body ${kind}`);
    if (kind === "historyPage")
        return {
            ...value,
            items: value.items.map((item) => {
                const result = { ...item, [item.kind]: item.payload };
                delete result.payload;
                return result;
            }),
        };
    return value;
}
export function encode(value, explicitKind) {
    if (!value || typeof value !== "object" || Array.isArray(value))
        throw new Error("Typed protobuf business object required");
    validate(value);
    const [kind, body] = explicitKind
        ? [explicitKind, explicitBody(explicitKind, value)]
        : pack(value);
    const input = { protocolVersion: 3, [kind]: body };
    const problem = Packet.verify(input);
    if (problem)
        throw new Error(problem);
    const message = Packet.fromObject(input);
    assertKnown(input, Packet.toObject(message, { defaults: true, arrays: true, objects: true }));
    return Packet.encode(message).finish();
}
export function decode(bytes, expectedKind) {
    if (!(bytes instanceof Uint8Array) && !(bytes instanceof ArrayBuffer))
        throw new Error("Binary protobuf frame required");
    const packet = Packet.decode(bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes));
    if (packet.protocolVersion !== 3 || !packet.body)
        throw new Error("Unsupported protobuf protocol version or body");
    const obj = Packet.toObject(packet, {
        longs: Number,
        defaults: false,
        arrays: true,
        objects: true,
        oneofs: false,
    });
    const kind = packet.body;
    if (expectedKind && kind !== expectedKind)
        throw new Error(`Unexpected protobuf body ${kind}; expected ${expectedKind}`);
    let body = obj[kind];
    if (kind === "frame") {
        const arm = packet.frame?.body;
        if (!arm)
            throw new Error("Frame body required");
        const type = arm.replace(/[A-Z]/g, (c) => "_" + c.toLowerCase());
        body =
            type === "snapshot" || type === "consume_result"
                ? { type, payload: body[arm] }
                : { ...body[arm], type };
    }
    if (kind === "historyPage")
        body.items = body.items.map((item) => {
            const result = { ...item, payload: item[item.kind] };
            delete result[item.kind];
            return result;
        });
    validate(body);
    return body;
}
// Static protobuf encoders otherwise silently drop unknown object properties.
// Binary unknown fields remain forward-compatible on decode.
function assertKnown(input, normalized) {
    if (!input || typeof input !== "object")
        return;
    const target = normalized;
    for (const [key, value] of Object.entries(input)) {
        if (!target || !Object.prototype.hasOwnProperty.call(target, key))
            throw new Error(`Unknown protobuf field: ${key}`);
        assertKnown(value, target[key]);
    }
}
