import { copyFileSync, mkdirSync } from "node:fs";
mkdirSync("dist/generated", { recursive: true });
for (const file of ["mediflow.js", "mediflow.d.ts"]) copyFileSync(`src/generated/${file}`, `dist/generated/${file}`);
