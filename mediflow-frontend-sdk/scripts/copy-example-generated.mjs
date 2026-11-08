import { cpSync } from "node:fs";
cpSync("src/generated", ".example-build/src/generated", { recursive: true });
