import type { Call, Consumption, ConsumeResult, PlaybackStatus } from "./types.js";
export interface PlaybackState {
    status: "idle" | "playing" | "offline" | "uncertain" | "paused" | "closed";
    queued: number;
    failedAuditCount: number;
    uncertain?: {
        callId: string;
        requestId: string;
    };
}
export interface PlaybackOptions {
    /** Resolve only after audio finishes; reject on device failure. SDK never replays failed audio. */
    play(text: string): Promise<void>;
    onState?(state: PlaybackState): void;
    onConsumption?(result: ConsumeResult): void;
    /** Bound queued candidates and retained failed audit events. Defaults to 1000. */
    maxQueuedCalls?: number;
    maxAuditEvents?: number;
    /** Bounded automatic retries of uncertain consumption, reusing the same request ID. */
    retryMs?: number;
    retryMaxMs?: number;
}
interface Port {
    readonly isConnected: boolean;
    createConsumption(id: string): Consumption;
    refreshPendingCalls(): void;
    reportPlayback(callId: string, requestId: string, status: PlaybackStatus, error?: string, eventId?: string): Promise<unknown>;
}
/** Internal playback state machine. Application callbacks never own protocol state. */
export declare class PlaybackQueue {
    private client;
    private options;
    private report;
    private queued;
    private audits;
    private current?;
    private uncertain?;
    private running;
    private paused;
    private closed;
    private refresh;
    private retryLogs?;
    private retryTimer?;
    private retryAttempt;
    constructor(client: Port, options: PlaybackOptions, report: (e: unknown) => void);
    get state(): PlaybackState;
    private notify;
    receive(calls: Call[]): void;
    connection(): void;
    private audit;
    private process;
    private drain;
    private scheduleRetry;
    /** Retry uncertain quota request with its original ID. Never retry audio. */
    retryConsumption(): Promise<void>;
    /** Resume new work after the operator repairs/enables audio, without replaying failed audio. */
    resume(): void;
    retryAuditLogs(): Promise<void>;
    close(): void;
}
export {};
