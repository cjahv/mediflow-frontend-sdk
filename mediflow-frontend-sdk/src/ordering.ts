import type { Template } from "./types.js";

/** Stable display ordering. Equal order values retain source order; input is never mutated. */
export function orderedSnapshot<T extends { data: Template }>(snapshot: T): T {
  const next = structuredClone(snapshot);
  for (const queue of next.data.queues) {
    for (const section of queue.sections) {
      section.persons.sort((left, right) => left.order - right.order);
    }
  }
  return next;
}
