import type { PlaybackOptions } from "./playback.js";
/** Display fields are authoritative: clients never move people between sections. */
export interface Person {
  id: string;
  name: string;
  order: number;
  displayNumber: string;
}
export interface Section {
  id: string;
  name: string;
  persons: Person[];
}
export interface Queue {
  id: string;
  name: string;
  sections: Section[];
}
export interface Template {
  queues: Queue[];
}
export interface Snapshot {
  epoch: string;
  screenId: string;
  version: number;
  templateVersion: string;
  data: Template;
}
export interface Call {
  id: string;
  queueId: string;
  personId: string;
  text: string;
  totalQuota: number;
  consumed: number;
  remaining: number;
  expiresAt?: string;
  active: boolean;
}
export interface ConsumeResult {
  requestId: string;
  callId: string;
  screenId: string;
  granted: boolean;
  remaining: number;
  text: string;
  consumedAt?: string;
  reason?: string;
}
export type PlaybackStatus = "started" | "completed" | "failed";
export interface PageInfo {
  page: number;
  pageSize: number;
  total: number;
}
export interface Options {
  /** Origin or a URL ending in /mediflow. */
  baseURL: string;
  token: string;
  /** Admin-session read-only mirror. Does not mark the physical screen online or consume quota. */
  mode?: "screen" | "preview";
  /** SDK owns sequential playback, quota retries and audit retries. Supply only your audio implementation. */
  playback?: PlaybackOptions;
  reconnectMs?: number;
  reconnectMaxMs?: number;
  /** Independent, bounded candidate batches. Optional observer; do not consume here when playback is configured. */
  onPendingCalls?: (calls: Call[]) => void;
  requestTimeoutMs?: number;
  onSnapshot?: (snapshot: Snapshot) => void;
  onCalls?: (calls: Call[], page: PageInfo) => void;
  onPlaybackResult?: (result: PlaybackResult) => void;
  onStatus?: (
    status: "connecting" | "online" | "offline" | "rejected" | "closed",
  ) => void;
  onError?: (error: Error) => void;
  webSocketFactory?: (url: string) => WebSocket;
}

/** SDK-owned request envelope. Application code never constructs or sends these frames. */
export type ClientMessage =
  | { type: "ping" }
  | { type: "auth"; token: string }
  | { type: "sync"; page: number; pageSize: number }
  | { type: "pending_sync"; cursor: string; requestId: string }
  | { type: "consume"; callId: string; requestId: string }
  | {
      type: "playback";
      eventId: string;
      callId: string;
      requestId: string;
      status: PlaybackStatus;
      error?: string;
    };
export interface PlaybackResult {
  eventId: string;
  callId: string;
  status: PlaybackStatus;
  requestId: string;
  ok: true;
}
/** One logical consumption. Preserve requestId when restoring after app restart. */
export interface Consumption {
  readonly callId: string;
  readonly requestId: string;
  execute(): Promise<ConsumeResult>;
  play(player: (text: string) => Promise<void>): Promise<ConsumeResult>;
}
