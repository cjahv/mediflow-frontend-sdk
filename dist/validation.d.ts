import type { Call, ConsumeResult, Snapshot } from "./types.js";
export declare function validateSnapshot(value: unknown): Snapshot;
export declare function validateCall(value: unknown): Call;
export declare function validateConsumption(value: unknown, screenId: string): ConsumeResult;
