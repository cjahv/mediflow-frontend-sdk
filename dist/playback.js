/** Internal playback state machine. Application callbacks never own protocol state. */
export class PlaybackQueue {
    client;
    options;
    report;
    queued = new Map();
    audits = new Map();
    current;
    uncertain;
    running = false;
    paused = false;
    closed = false;
    refresh = false;
    retryLogs;
    retryTimer;
    retryAttempt = 0;
    constructor(client, options, report) {
        this.client = client;
        this.options = options;
        this.report = report;
        if (options.maxAuditEvents !== undefined && options.maxAuditEvents < 2)
            throw Error("Playback audit buffer must reserve at least two events");
        for (const n of [
            options.maxQueuedCalls,
            options.maxAuditEvents,
            options.retryMs,
            options.retryMaxMs,
        ])
            if (n !== undefined && (!Number.isSafeInteger(n) || n < 1))
                throw Error("Playback limits must be positive integers");
    }
    get state() {
        return {
            status: this.closed
                ? "closed"
                : this.paused
                    ? "paused"
                    : this.uncertain
                        ? "uncertain"
                        : !this.client.isConnected
                            ? "offline"
                            : this.running
                                ? "playing"
                                : "idle",
            queued: this.queued.size,
            failedAuditCount: this.audits.size,
            ...(this.uncertain
                ? {
                    uncertain: {
                        callId: this.uncertain.callId,
                        requestId: this.uncertain.requestId,
                    },
                }
                : {}),
        };
    }
    notify() {
        try {
            void Promise.resolve(this.options.onState?.(this.state)).catch(this.report);
        }
        catch (e) {
            this.report(e);
        }
    }
    receive(calls) {
        if (this.closed)
            return;
        for (const call of calls) {
            if (call.id === this.current?.callId ||
                call.id === this.uncertain?.callId) {
                // The same call may gain quota while its current audio is still playing.
                this.refresh = true;
                continue;
            }
            if (!this.queued.has(call.id) &&
                this.queued.size >= (this.options.maxQueuedCalls ?? 1000)) {
                this.refresh = true;
                continue;
            }
            this.queued.set(call.id, call);
        }
        this.notify();
        void this.drain();
    }
    connection() {
        clearTimeout(this.retryTimer);
        this.retryTimer = undefined;
        this.notify();
        if (this.client.isConnected) {
            void this.retryAuditLogs();
            void this.drain(this.uncertain);
        }
    }
    async audit(event) {
        try {
            await this.client.reportPlayback(event.callId, event.requestId, event.status, event.error, event.eventId);
            this.audits.delete(event.eventId);
        }
        catch (e) {
            if (this.audits.has(event.eventId) ||
                this.audits.size < (this.options.maxAuditEvents ?? 1000))
                this.audits.set(event.eventId, event);
            else {
                this.paused = true;
                this.report(Error("Playback audit buffer full; audio paused. Review server logs."));
            }
            this.report(e);
        }
        this.notify();
    }
    async process(op) {
        let result;
        try {
            result = await op.execute();
        }
        catch (e) {
            this.uncertain = op;
            this.report(e);
            return;
        }
        this.uncertain = undefined;
        this.retryAttempt = 0;
        try {
            void Promise.resolve(this.options.onConsumption?.(result)).catch(this.report);
        }
        catch (e) {
            this.report(e);
        }
        if (!result.granted)
            return;
        const event = (status, error) => ({
            callId: op.callId,
            requestId: op.requestId,
            status,
            error,
            eventId: `${op.requestId}:${status}`,
        });
        await this.audit(event("started"));
        if (this.closed) {
            await this.audit(event("failed", "screen stopped before playback"));
            return;
        }
        try {
            await this.options.play(result.text);
            await this.audit(event("completed"));
        }
        catch (e) {
            this.paused = true;
            await this.audit(event("failed", "audio player failed"));
            this.report(e);
        }
        if (result.remaining > 0)
            this.refresh = true;
    }
    async drain(retry) {
        if (this.running ||
            this.closed ||
            this.paused ||
            !this.client.isConnected ||
            (this.uncertain && !retry))
            return;
        this.running = true;
        this.notify();
        try {
            if (retry) {
                this.current = retry;
                await this.process(retry);
                this.current = undefined;
            }
            while (!this.closed &&
                !this.paused &&
                !this.uncertain &&
                this.client.isConnected &&
                this.queued.size) {
                // Reserve started + terminal event slots before acquiring another quota.
                if (this.audits.size + 2 > (this.options.maxAuditEvents ?? 1000)) {
                    this.paused = true;
                    this.report(new Error("Playback audit buffer full; retry reports before resuming audio"));
                    break;
                }
                const id = this.queued.keys().next().value;
                this.queued.delete(id);
                this.current = this.client.createConsumption(id);
                await this.process(this.current);
                this.current = undefined;
            }
        }
        finally {
            this.current = undefined;
            this.running = false;
            this.scheduleRetry();
            this.notify();
            if (this.refresh &&
                !this.closed &&
                !this.paused &&
                !this.uncertain &&
                this.client.isConnected) {
                this.refresh = false;
                this.client.refreshPendingCalls();
            }
        }
    }
    scheduleRetry() {
        if (!this.uncertain ||
            this.closed ||
            this.paused ||
            !this.client.isConnected ||
            this.retryTimer)
            return;
        const delay = Math.min(this.options.retryMaxMs ?? 30000, (this.options.retryMs ?? 1000) * 2 ** Math.min(this.retryAttempt++, 20));
        this.retryTimer = setTimeout(() => {
            this.retryTimer = undefined;
            if (this.uncertain)
                void this.drain(this.uncertain);
        }, delay * (0.5 + Math.random() * 0.5));
    }
    /** Retry uncertain quota request with its original ID. Never retry audio. */
    async retryConsumption() {
        if (!this.client.isConnected)
            throw Error("Screen is offline");
        clearTimeout(this.retryTimer);
        this.retryTimer = undefined;
        if (this.uncertain)
            await this.drain(this.uncertain);
    }
    /** Resume new work after the operator repairs/enables audio, without replaying failed audio. */
    resume() {
        this.paused = false;
        this.notify();
        this.client.refreshPendingCalls();
        void this.drain();
    }
    retryAuditLogs() {
        if (this.retryLogs)
            return this.retryLogs;
        this.retryLogs = (async () => {
            for (const event of [...this.audits.values()])
                await this.audit(event);
        })().finally(() => {
            this.retryLogs = undefined;
        });
        return this.retryLogs;
    }
    close() {
        this.closed = true;
        clearTimeout(this.retryTimer);
        this.retryTimer = undefined;
        this.queued.clear();
        this.notify();
    }
}
