import test from "node:test";
import assert from "node:assert/strict";
import { orderedSnapshot } from "../dist/index.js";
test("stable ordering preserves external IDs, fractions, sections and source ownership", () => {
  const source = {
    version: 7,
    data: {
      queues: [
        {
          id: "q",
          name: "Q",
          sections: [
            {
              id: "s",
              name: "S",
              persons: [
                { id: "0002", name: "B", displayNumber: "B02", order: 1.5 },
                { id: "外部", name: "A", displayNumber: "A01", order: -1 },
                { id: "0003", name: "C", displayNumber: "C03", order: 1.5 },
              ],
            },
            { id: "empty", name: "Empty", persons: [] },
          ],
        },
      ],
    },
  };
  const next = orderedSnapshot(source);
  assert.deepEqual(
    next.data.queues[0].sections[0].persons.map((p) => p.id),
    ["外部", "0002", "0003"],
  );
  assert.deepEqual(
    source.data.queues[0].sections[0].persons.map((p) => p.id),
    ["0002", "外部", "0003"],
  );
  assert.deepEqual(
    next.data.queues[0].sections[0].persons.map((p) => p.order),
    [-1, 1.5, 1.5],
  );
  next.data.queues[0].sections[0].persons[0].name = "changed";
  assert.equal(source.data.queues[0].sections[0].persons[1].name, "A");
  assert.deepEqual(orderedSnapshot({ data: { queues: [] } }), {
    data: { queues: [] },
  });
});
