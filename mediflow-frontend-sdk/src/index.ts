import { orderedSnapshot } from "./ordering.js";
export { orderedSnapshot } from "./ordering.js";
import { PlaybackQueue } from "./playback.js";
export type { PlaybackOptions, PlaybackState } from "./playback.js";
export { encode, decode, PROTOBUF_CONTENT_TYPE } from "./protobuf.js";
import {
  validateSnapshot,
  validateCall,
  validateConsumption,
} from "./validation.js";
import { encode, decode } from "./protobuf.js";
export type * from "./types.js";
import type {
  Options,
  Snapshot,
  Call,
  ConsumeResult,
  PlaybackStatus,
  ClientMessage,
  Consumption,
  PlaybackResult,
} from "./types.js";
interface Pending {
  callId: string;
  resolve: (value: ConsumeResult) => void;
  reject: (reason: Error) => void;
  timer: ReturnType<typeof setTimeout>;
}
export class ScreenClient {
  private options: Options;
  private playback?: PlaybackQueue;
  private socket?: WebSocket;
  private stopped = true;
  private ready = false;
  private reconnect?: ReturnType<typeof setTimeout>;
  private heartbeat?: ReturnType<typeof setInterval>;
  private authTimer?: ReturnType<typeof setTimeout>;
  private pending = new Map<string, Pending>();
  private last?: Snapshot;
  private readyWaiters = new Set<{
    resolve: () => void;
    reject: (error: Error) => void;
    timer: ReturnType<typeof setTimeout>;
  }>();
  private reconnectAttempt = 0;
  private historyPage = 1;
  private historyPageSize = 20;
  private pendingSyncId?: string;
  private pendingSyncAgain = false;
  private pendingRetryAttempt = 0;
  private pendingRetryTimer?: ReturnType<typeof setTimeout>;
  private pendingSyncTimer?: ReturnType<typeof setTimeout>;
  private playbackPending = new Map<
    string,
    {
      callId: string;
      requestId: string;
      status: PlaybackStatus;
      resolve: (result: PlaybackResult) => void;
      reject: (error: Error) => void;
      timer: ReturnType<typeof setTimeout>;
    }
  >();
  private played = new Set<string>();
  constructor(options: Options) {
    if (!options.token) throw new Error("Screen token is required");
    const url = new URL(options.baseURL);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      !["", "/", "/mediflow", "/mediflow/"].includes(url.pathname)
    )
      throw new Error("baseURL must be an http(s) origin or /mediflow URL");
    for (const value of [
      options.reconnectMs,
      options.reconnectMaxMs,
      options.requestTimeoutMs,
    ])
      if (value !== undefined && (!Number.isFinite(value) || value <= 0))
        throw new Error("Timeouts must be positive finite milliseconds");
    if (
      options.mode === "preview" &&
      (options.playback || options.onPendingCalls)
    )
      throw new Error(
        "Preview mode is read-only and cannot configure playback or consumption",
      );
    this.options = { ...options };
    if (options.playback)
      this.playback = new PlaybackQueue(this, options.playback, (e) =>
        this.report(e),
      );
  }
  get snapshot(): Snapshot | undefined {
    return this.last && structuredClone(this.last);
  }
  get isConnected(): boolean {
    return this.ready && !this.stopped;
  }
  /** Opens the connection, authenticates internally, and resolves on the first valid snapshot. */
  start(timeoutMs = this.options.requestTimeoutMs ?? 10000): Promise<void> {
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0)
      return Promise.reject(new Error("timeoutMs must be positive"));
    if (this.isConnected) return Promise.resolve();
    const result = new Promise<void>((resolve, reject) => {
      const waiter = {
        resolve,
        reject,
        timer: setTimeout(() => {
          this.readyWaiters.delete(waiter);
          reject(
            new Error(
              "Connection readiness timed out; automatic reconnect continues until close()",
            ),
          );
        }, timeoutMs),
      };
      this.readyWaiters.add(waiter);
    });
    this.connect();
    return result;
  }
  private finishReady(error?: Error): void {
    for (const waiter of this.readyWaiters) {
      clearTimeout(waiter.timer);
      if (error) waiter.reject(error);
      else waiter.resolve();
    }
    this.readyWaiters.clear();
  }
  /** Creates the request ID once; execute()/play() always reuse it on retries. */
  createConsumption(
    callId: string,
    requestId = globalThis.crypto.randomUUID(),
  ): Consumption {
    if (!callId || !requestId)
      throw new Error("callId and requestId are required");
    return Object.freeze({
      callId,
      requestId,
      execute: () => this.consume(callId, requestId),
      play: (player: (text: string) => Promise<void>) =>
        this.consumeAndPlay(callId, requestId, player),
    });
  }
  connect(): void {
    if (!this.stopped) return;
    this.stopped = false;
    if (this.playback?.state.status === "closed" && this.options.playback)
      this.playback = new PlaybackQueue(this, this.options.playback, (e) =>
        this.report(e),
      );
    this.open();
  }
  private report(error: unknown): void {
    try {
      void Promise.resolve(
        this.options.onError?.(
          error instanceof Error ? error : new Error(String(error)),
        ),
      ).catch(() => {});
    } catch {
      /* Error observers cannot stop transport recovery. */
    }
  }
  private notify(callback: (() => void) | undefined): void {
    try {
      void Promise.resolve(callback?.()).catch((error) => this.report(error));
    } catch (error) {
      this.report(error);
    }
  }
  get playbackState() {
    return this.playback?.state;
  }
  retryConsumption(): Promise<void> {
    return (
      this.playback?.retryConsumption() ??
      Promise.reject(new Error("Configure playback first"))
    );
  }
  resumePlayback(): void {
    this.playback?.resume();
  }
  retryPlaybackReports(): Promise<void> {
    return this.playback?.retryAuditLogs() ?? Promise.resolve();
  }
  private open(): void {
    if (this.stopped) return;
    this.ready = false;
    this.notify(() => this.options.onStatus?.("connecting"));
    const base = this.options.baseURL
      .replace(/\/$/, "")
      .replace(/\/mediflow$/, "");
    const url = new URL(
      base +
        (this.options.mode === "preview"
          ? "/mediflow/ws/diagnostic"
          : "/mediflow/ws"),
    );
    if (!["http:", "https:"].includes(url.protocol))
      throw new Error("baseURL must use http or https");
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    let socket: WebSocket;
    try {
      socket = (this.options.webSocketFactory ?? ((u) => new WebSocket(u)))(
        url.toString(),
      );
    } catch (error) {
      this.report(error);
      this.scheduleReconnect();
      return;
    }
    this.socket = socket;
    socket.binaryType = "arraybuffer";
    socket.onopen = () => {
      if (this.socket !== socket || this.stopped) return;
      socket.send(encode({ type: "auth", token: this.options.token }));
      this.authTimer = setTimeout(
        () => socket.close(),
        this.options.requestTimeoutMs ?? 10000,
      );
    };
    socket.onmessage = (event) => {
      if (this.socket !== socket) return;
      try {
        if (
          (event.data instanceof ArrayBuffer ||
            event.data instanceof Uint8Array) &&
          event.data.byteLength > 16 << 20
        )
          throw new Error("WebSocket frame exceeds 16 MiB");
        const message = decode(event.data);
        if (message.type === "snapshot") {
          const state = orderedSnapshot(validateSnapshot(message.payload));
          if (this.ready && this.last && state.screenId !== this.last.screenId)
            throw new Error("Snapshot changed authenticated screen");
          // First snapshot on a new connection is authoritative, including restored server data.
          if (
            !this.ready ||
            !this.last ||
            state.epoch !== this.last.epoch ||
            state.screenId !== this.last.screenId ||
            state.version > this.last.version
          ) {
            this.last = structuredClone(state);
            this.notify(() =>
              this.options.onSnapshot?.(structuredClone(state)),
            );
          }
          if (!this.ready) {
            this.ready = true;
            this.reconnectAttempt = 0;
            clearTimeout(this.authTimer);
            this.notify(() => this.options.onStatus?.("online"));
            this.playback?.connection();
            this.finishReady();
            clearInterval(this.heartbeat);
            this.heartbeat = setInterval(() => {
              try {
                this.send({ type: "ping" });
              } catch (error) {
                this.report(error);
              }
            }, 25000);
            if (this.historyPage !== 1 || this.historyPageSize !== 20)
              this.send({
                type: "sync",
                page: this.historyPage,
                pageSize: this.historyPageSize,
              });
            this.refreshPendingCalls();
          }
        } else if (message.type === "calls") {
          const { page, pageSize, total } = message;
          if (
            !Array.isArray(message.payload) ||
            !Number.isSafeInteger(page) ||
            page < 1 ||
            !Number.isSafeInteger(pageSize) ||
            pageSize < 1 ||
            pageSize > 100 ||
            !Number.isSafeInteger(total) ||
            total < 0 ||
            message.payload.length > pageSize ||
            message.payload.length > total ||
            page > Math.max(1, Math.ceil(total / pageSize))
          )
            throw new Error("Invalid calls pagination frame");
          const calls = message.payload.map(validateCall);
          this.notify(() =>
            this.options.onCalls?.(calls, { page, pageSize, total }),
          );
          this.refreshPendingCalls();
        } else if (message.type === "pending_calls") {
          if (message.requestId !== this.pendingSyncId) return;
          if (
            message.screenId !== this.last?.screenId ||
            !Array.isArray(message.payload) ||
            message.payload.length > 100 ||
            typeof message.nextCursor !== "string"
          )
            throw new Error("Invalid pending calls frame");
          const calls = message.payload.map(validateCall);
          if (calls.some((call: Call) => !call.active || call.remaining <= 0))
            throw new Error("Invalid pending call eligibility");
          clearTimeout(this.pendingSyncTimer);
          this.pendingSyncId = undefined;
          this.pendingRetryAttempt = 0;
          // Advance protocol state before user code; an observer cannot strand the cursor.
          if (message.nextCursor) this.requestPendingPage(message.nextCursor);
          else if (this.pendingSyncAgain) {
            this.pendingSyncAgain = false;
            this.refreshPendingCalls();
          }
          this.playback?.receive(calls);
          this.notify(() => this.options.onPendingCalls?.(calls));
        } else if (message.type === "consume_result") {
          let result: ConsumeResult;
          try {
            result = validateConsumption(
              message.payload,
              this.last?.screenId ?? "",
            );
          } catch (error) {
            const entry = this.pending.get(message.payload?.requestId);
            if (entry) {
              clearTimeout(entry.timer);
              this.pending.delete(message.payload.requestId);
              entry.reject(error as Error);
            }
            throw error;
          }
          const entry = this.pending.get(result.requestId);
          if (entry) {
            clearTimeout(entry.timer);
            this.pending.delete(result.requestId);
            if (entry.callId !== result.callId)
              entry.reject(new Error("Consumption call mismatch"));
            else entry.resolve(result);
          }
        } else if (message.type === "playback_result") {
          const entry = this.playbackPending.get(message.eventId);
          if (!entry) return;
          if (
            message.ok !== true ||
            message.callId !== entry.callId ||
            message.requestId !== entry.requestId ||
            message.status !== entry.status
          )
            throw new Error("Invalid playback acknowledgement");
          clearTimeout(entry.timer);
          this.playbackPending.delete(message.eventId);
          const result: PlaybackResult = {
            eventId: message.eventId,
            callId: message.callId,
            requestId: message.requestId,
            status: message.status,
            ok: true,
          };
          entry.resolve(result);
          this.notify(() => this.options.onPlaybackResult?.(result));
        } else if (message.type === "error") {
          const error = new Error(
            message.message ?? message.error ?? "Server rejected request",
          );
          const playback = this.playbackPending.get(message.eventId);
          if (playback) {
            clearTimeout(playback.timer);
            this.playbackPending.delete(message.eventId);
            playback.reject(error);
          }
          if (message.requestId === this.pendingSyncId) {
            clearTimeout(this.pendingSyncTimer);
            this.pendingSyncId = undefined;
            this.schedulePendingRetry();
          }
          const entry = this.pending.get(message.requestId);
          if (entry) {
            clearTimeout(entry.timer);
            this.pending.delete(message.requestId);
            entry.reject(error);
          }
          this.report(error);
        }
      } catch (error) {
        this.report(error);
      }
    };
    socket.onerror = () => this.report(new Error("WebSocket connection error"));
    socket.onclose = (event) => {
      if (this.socket !== socket) return;
      clearTimeout(this.authTimer);
      clearInterval(this.heartbeat);
      this.ready = false;
      clearTimeout(this.pendingSyncTimer);
      clearTimeout(this.pendingRetryTimer);
      this.pendingRetryTimer = undefined;
      this.pendingSyncId = undefined;
      this.rejectPending(
        "Connection lost; consumption outcome may be uncertain. Retry using the SAME requestId.",
      );
      if (event?.code === 1008) {
        this.stopped = true;
        this.notify(() => this.options.onStatus?.("rejected"));
        this.playback?.connection();
        const error = new Error(
          "Authentication or policy rejected; check screen token before reconnecting",
        );
        this.finishReady(error);
        this.report(error);
      }
      if (!this.stopped) {
        this.notify(() => this.options.onStatus?.("offline"));
        this.playback?.connection();
        this.scheduleReconnect();
      }
    };
  }
  private scheduleReconnect(): void {
    if (this.stopped) return;
    const base = this.options.reconnectMs ?? 1500;
    const cap = this.options.reconnectMaxMs ?? 30000;
    const ceiling = Math.min(
      cap,
      base * 2 ** Math.min(this.reconnectAttempt++, 20),
    );
    const delay = Math.max(
      1,
      Math.floor(ceiling * (0.5 + Math.random() * 0.5)),
    );
    this.reconnect = setTimeout(() => this.open(), delay);
  }
  /** Refreshes consumable calls independently from the audit/history page. */
  refreshPendingCalls(): void {
    if (
      this.options.mode === "preview" ||
      (!this.options.onPendingCalls && !this.playback) ||
      !this.ready
    )
      return;
    if (this.pendingSyncId) {
      this.pendingSyncAgain = true;
      return;
    }
    clearTimeout(this.pendingRetryTimer);
    this.pendingRetryTimer = undefined;
    this.requestPendingPage("");
  }
  private schedulePendingRetry(): void {
    if (this.stopped || !this.ready || this.pendingRetryTimer) return;
    const base = this.options.reconnectMs ?? 1500;
    const cap = this.options.reconnectMaxMs ?? 30000;
    const delay = Math.min(
      cap,
      base * 2 ** Math.min(this.pendingRetryAttempt++, 20),
    );
    this.pendingRetryTimer = setTimeout(
      () => {
        this.pendingRetryTimer = undefined;
        this.refreshPendingCalls();
      },
      delay * (0.5 + Math.random() * 0.5),
    );
  }
  private requestPendingPage(cursor: string): void {
    const requestId = globalThis.crypto.randomUUID();
    this.pendingSyncId = requestId;
    clearTimeout(this.pendingSyncTimer);
    this.pendingSyncTimer = setTimeout(() => {
      this.pendingSyncId = undefined;
      this.report(
        new Error(
          "Pending calls synchronization timed out; SDK will retry automatically",
        ),
      );
      this.schedulePendingRetry();
    }, this.options.requestTimeoutMs ?? 10000);
    try {
      this.send({ type: "pending_sync", requestId, cursor });
    } catch (error) {
      clearTimeout(this.pendingSyncTimer);
      this.pendingSyncId = undefined;
      this.report(error);
      this.schedulePendingRetry();
    }
  }
  private send(message: ClientMessage): void {
    if (
      this.options.mode === "preview" &&
      message.type !== "sync" &&
      message.type !== "ping"
    )
      throw new Error("Preview mode is read-only");
    if (!this.ready || this.socket?.readyState !== 1)
      throw new Error("Screen is offline");
    this.socket.send(encode(message));
  }
  /** Generate once per intended consumption; keep this ID for ALL retries of that request. */
  consume(callId: string, requestId: string): Promise<ConsumeResult> {
    if (!callId || !requestId)
      return Promise.reject(new Error("callId and requestId are required"));
    if (this.pending.has(requestId))
      return Promise.reject(new Error("This requestId is already in flight"));
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(requestId);
        reject(
          new Error("Consumption timed out; retry using the SAME requestId"),
        );
      }, this.options.requestTimeoutMs ?? 10000);
      this.pending.set(requestId, { callId, resolve, reject, timer });
      try {
        this.send({ type: "consume", callId, requestId });
      } catch (error) {
        clearTimeout(timer);
        this.pending.delete(requestId);
        reject(error);
      }
    });
  }
  /** Logging only. Retry the same eventId after an uncertain result; never retries audio. */
  reportPlayback(
    callId: string,
    requestId: string,
    status: PlaybackStatus,
    error?: string,
    eventId = `${requestId}:${status}`,
  ): Promise<PlaybackResult> {
    if (
      !callId ||
      !requestId ||
      !eventId ||
      !["started", "completed", "failed"].includes(status)
    )
      return Promise.reject(
        new Error(
          "Valid callId, requestId, eventId and playback status are required",
        ),
      );
    if (this.playbackPending.has(eventId))
      return Promise.reject(new Error("Playback event is already in flight"));
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.playbackPending.delete(eventId);
        reject(
          new Error("Playback acknowledgement timed out; retry SAME eventId"),
        );
      }, this.options.requestTimeoutMs ?? 10000);
      this.playbackPending.set(eventId, {
        callId,
        requestId,
        status,
        resolve,
        reject,
        timer,
      });
      try {
        this.send({
          type: "playback",
          eventId,
          callId,
          requestId,
          status,
          ...(error ? { error } : {}),
        });
      } catch (e) {
        clearTimeout(timer);
        this.playbackPending.delete(eventId);
        reject(e);
      }
    });
  }
  /** Requests a bounded page of call history and the current snapshot. */
  sync(page = 1, pageSize = 20): void {
    if (
      !Number.isSafeInteger(page) ||
      page < 1 ||
      !Number.isSafeInteger(pageSize) ||
      pageSize < 1 ||
      pageSize > 100
    )
      throw new Error(
        "page must be positive and pageSize must be between 1 and 100",
      );
    this.historyPage = page;
    this.historyPageSize = pageSize;
    this.send({ type: "sync", page, pageSize });
  }
  /** Convenience only: the application's player owns actual audio playback. */
  async consumeAndPlay(
    callId: string,
    requestId: string,
    play: (text: string) => Promise<void>,
  ): Promise<ConsumeResult> {
    const result = await this.consume(callId, requestId);
    if (!result.granted || this.played.has(requestId)) return result;
    // Set before playback to avoid duplicate invocation in the same client lifetime.
    this.played.add(requestId);
    const log = (status: PlaybackStatus, error?: string) => {
      try {
        void this.reportPlayback(callId, requestId, status, error).catch((e) =>
          this.report(e),
        );
      } catch (e) {
        this.report(e);
      }
    };
    log("started");
    try {
      await play(result.text);
      log("completed");
    } catch (error) {
      log("failed", error instanceof Error ? error.message : String(error));
      throw error;
    }
    return result;
  }
  private rejectPending(reason: string): void {
    for (const item of this.playbackPending.values()) {
      clearTimeout(item.timer);
      item.reject(new Error(reason));
    }
    this.playbackPending.clear();
    for (const item of this.pending.values()) {
      clearTimeout(item.timer);
      item.reject(new Error(reason));
    }
    this.pending.clear();
  }
  close(): void {
    this.playback?.close();
    this.stopped = true;
    this.ready = false;
    clearTimeout(this.reconnect);
    clearTimeout(this.authTimer);
    clearInterval(this.heartbeat);
    clearTimeout(this.pendingSyncTimer);
    clearTimeout(this.pendingRetryTimer);
    this.pendingRetryTimer = undefined;
    this.pendingSyncId = undefined;
    this.finishReady(new Error("Client closed before ready"));
    this.rejectPending(
      "Client closed; preserve requestId for any uncertain consumption",
    );
    this.socket?.close();
    this.notify(() => this.options.onStatus?.("closed"));
  }
}
