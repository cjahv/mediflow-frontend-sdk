function object(value) {
    if (!value || typeof value !== "object" || Array.isArray(value))
        throw new Error("Expected message object");
}
function text(value, required = true) {
    if (typeof value !== "string" || (required && !value))
        throw new Error("Invalid text field");
}
function integer(value) {
    if (!Number.isSafeInteger(value) || value < 0)
        throw new Error("Invalid nonnegative integer field");
}
function timestamp(value) {
    if (value !== undefined &&
        (typeof value !== "string" ||
            (value !== "" && !Number.isFinite(Date.parse(value)))))
        throw new Error("Invalid timestamp field");
}
export function validateSnapshot(value) {
    object(value);
    text(value.screenId);
    text(value.epoch);
    integer(value.version);
    if (value.templateVersion !== "1")
        throw new Error("Unsupported snapshot template");
    object(value.data);
    if (!Array.isArray(value.data.queues))
        throw new Error("Invalid queues");
    for (const queue of value.data.queues) {
        object(queue);
        text(queue.id);
        text(queue.name);
        if (!Array.isArray(queue.sections))
            throw new Error("Invalid sections");
        for (const section of queue.sections) {
            object(section);
            text(section.id);
            text(section.name);
            if (!Array.isArray(section.persons))
                throw new Error("Invalid persons");
            for (const person of section.persons) {
                object(person);
                text(person.id);
                text(person.name);
                text(person.displayNumber);
                if (typeof person.order !== "number" || !Number.isFinite(person.order))
                    throw new Error("Invalid person order");
            }
        }
    }
    return value;
}
export function validateCall(value) {
    object(value);
    text(value.id);
    text(value.queueId, false);
    text(value.personId, false);
    text(value.text);
    integer(value.totalQuota);
    integer(value.consumed);
    integer(value.remaining);
    if (typeof value.active !== "boolean" ||
        value.consumed > value.totalQuota ||
        value.remaining !== value.totalQuota - value.consumed)
        throw new Error("Invalid call quota");
    timestamp(value.expiresAt);
    return value;
}
export function validateConsumption(value, screenId) {
    object(value);
    text(value.requestId);
    text(value.callId);
    text(value.screenId);
    text(value.text, false);
    integer(value.remaining);
    if (value.remaining > 100)
        throw new Error("Invalid consumption remaining quota");
    if (value.screenId !== screenId || typeof value.granted !== "boolean")
        throw new Error("Invalid consumption screen or grant");
    if (value.granted && !value.text)
        throw new Error("Granted consumption requires text");
    if (value.reason !== undefined)
        text(value.reason, false);
    timestamp(value.consumedAt);
    return value;
}
