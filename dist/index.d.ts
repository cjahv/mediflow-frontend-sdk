export type { PlaybackOptions, PlaybackState } from "./playback.js";
export { encode, decode, PROTOBUF_CONTENT_TYPE } from "./protobuf.js";
export type * from "./types.js";
import type { Options, Snapshot, ConsumeResult, PlaybackStatus, Consumption, PlaybackResult } from "./types.js";
export declare class ScreenClient {
    private options;
    private playback?;
    private socket?;
    private stopped;
    private ready;
    private reconnect?;
    private heartbeat?;
    private authTimer?;
    private pending;
    private last?;
    private readyWaiters;
    private reconnectAttempt;
    private historyPage;
    private historyPageSize;
    private pendingSyncId?;
    private pendingSyncAgain;
    private pendingRetryAttempt;
    private pendingRetryTimer?;
    private pendingSyncTimer?;
    private playbackPending;
    private played;
    constructor(options: Options);
    get snapshot(): Snapshot | undefined;
    get isConnected(): boolean;
    /** Opens the connection, authenticates internally, and resolves on the first valid snapshot. */
    start(timeoutMs?: number): Promise<void>;
    private finishReady;
    /** Creates the request ID once; execute()/play() always reuse it on retries. */
    createConsumption(callId: string, requestId?: `${string}-${string}-${string}-${string}-${string}`): Consumption;
    connect(): void;
    private report;
    private notify;
    get playbackState(): import("./playback.js").PlaybackState | undefined;
    retryConsumption(): Promise<void>;
    resumePlayback(): void;
    retryPlaybackReports(): Promise<void>;
    private open;
    private scheduleReconnect;
    /** Refreshes consumable calls independently from the audit/history page. */
    refreshPendingCalls(): void;
    private schedulePendingRetry;
    private requestPendingPage;
    private send;
    /** Generate once per intended consumption; keep this ID for ALL retries of that request. */
    consume(callId: string, requestId: string): Promise<ConsumeResult>;
    /** Logging only. Retry the same eventId after an uncertain result; never retries audio. */
    reportPlayback(callId: string, requestId: string, status: PlaybackStatus, error?: string, eventId?: string): Promise<PlaybackResult>;
    /** Requests a bounded page of call history and the current snapshot. */
    sync(page?: number, pageSize?: number): void;
    /** Convenience only: the application's player owns actual audio playback. */
    consumeAndPlay(callId: string, requestId: string, play: (text: string) => Promise<void>): Promise<ConsumeResult>;
    private rejectPending;
    close(): void;
}
