import type { Template } from "./types.js";
/** Stable display ordering. Equal order values retain source order; input is never mutated. */
export declare function orderedSnapshot<T extends {
    data: Template;
}>(snapshot: T): T;
