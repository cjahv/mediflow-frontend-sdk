import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { encode, decode } from "../dist/index.js";

test("unattended example directly uses SDK, without history or control buttons", () => {
  const source = readFileSync(
    new URL("../examples/screen.ts", import.meta.url),
    "utf8",
  );
  assert.match(source, /new ScreenClient/);
  assert.match(source, /void client.start\(\)/);
  assert.doesNotMatch(
    source,
    /createScreenExample|new Map|new WebSocket|requestId|setTimeout|onCalls|history-next|#start|#retry|#resume-audio/,
  );
  assert.match(source, /playback:/);
});

test("compiled entry starts automatically and displays only current snapshot data", async () => {
  class Element {
    textContent = "";
    dataset = {};
    children = [];
    append(...children) {
      this.children.push(...children);
    }
    replaceChildren(...children) {
      this.children = children;
    }
    text() {
      return this.textContent + this.children.map((c) => c.text()).join("|");
    }
  }
  const elements = Object.fromEntries(
    ["#screen", "#connection", "#diagnostic"].map((id) => [id, new Element()]),
  );
  const listeners = {};
  const sockets = [];
  class Socket {
    readyState = 1;
    sent = [];
    constructor() {
      sockets.push(this);
    }
    send(bytes) {
      this.sent.push(decode(bytes));
    }
    close() {
      this.readyState = 3;
      this.onclose?.({ code: 1000 });
    }
    frame(value) {
      this.onmessage?.({ data: encode(value) });
    }
  }
  const replacements = {
    document: {
      querySelector: (id) => elements[id] ?? null,
      createElement: () => new Element(),
      createDocumentFragment: () => new Element(),
    },
    window: {
      addEventListener: (event, callback) => {
        listeners[event] = callback;
      },
    },
    screenConfig: { baseURL: "https://example.test", token: "test-only" },
    WebSocket: Socket,
  };
  const original = new Map(
    Object.keys(replacements).map((key) => [
      key,
      Object.getOwnPropertyDescriptor(globalThis, key),
    ]),
  );
  try {
    for (const [key, value] of Object.entries(replacements))
      Object.defineProperty(globalThis, key, {
        value,
        configurable: true,
        writable: true,
      });
    await import("../.example-build/examples/screen.js");
    assert.equal(sockets.length, 1, "startup must not require a button click");
    const socket = sockets[0];
    socket.onopen();
    assert.equal(socket.sent[0].type, "auth");
    const state = (version, queues) => ({
      type: "snapshot",
      payload: {
        screenId: "s1",
        epoch: "e1",
        version,
        templateVersion: "1",
        data: { queues },
      },
    });
    const queues = [
      {
        id: "q1",
        name: "普通门诊",
        sections: [
          {
            id: "current",
            name: "当前叫号",
            persons: [
              {
                id: "p1",
                name: "合成测试姓名",
                displayNumber: "A001",
                order: 1,
              },
            ],
          },
          { id: "waiting", name: "等待", persons: [] },
        ],
      },
    ];
    socket.frame(state(1, queues));
    await Promise.resolve();
    assert.equal(elements["#connection"].textContent, "在线");
    assert.match(
      elements["#screen"].text(),
      /普通门诊.*当前叫号.*A001 合成测试姓名.*等待/,
    );
    socket.frame({
      type: "calls",
      payload: [],
      page: 1,
      pageSize: 20,
      total: 0,
    });
    assert.doesNotMatch(elements["#screen"].text(), /历史/);
    socket.frame(state(2, []));
    assert.equal(
      elements["#screen"].text(),
      "",
      "empty current state clears previous people",
    );
    socket.frame(state(1, queues));
    assert.equal(
      elements["#screen"].text(),
      "",
      "older version cannot restore old people",
    );
    socket.frame(state(3, queues));
    socket.onclose({ code: 1006 });
    assert.equal(elements["#connection"].textContent, "离线，正在重连");
    assert.equal(elements["#screen"].dataset.offline, "true");
    assert.match(elements["#screen"].text(), /A001 合成测试姓名/);
    listeners.pagehide();
    assert.equal(socket.readyState, 3);
  } finally {
    listeners.pagehide?.();
    for (const [key, descriptor] of original) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  }
});
