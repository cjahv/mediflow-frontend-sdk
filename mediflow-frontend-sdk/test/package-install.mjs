// Installs the exact npm tarball in an empty project. No registry publication.
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
const temporary = mkdtempSync(join(tmpdir(), "mediflow-package-"));
const env = { ...process.env, npm_config_cache: join(temporary, "cache") };
try {
  const packed = JSON.parse(
    execFileSync("npm", ["pack", "--json", "--pack-destination", temporary], {
      encoding: "utf8",
      env,
    }),
  );
  const files = packed[0].files.map((file) => file.path);
  for (const required of [
    "dist/index.js",
    "dist/index.d.ts",
    "proto/mediflow.proto",
    "README.md",
    "LICENSE",
  ]) {
    if (!files.includes(required))
      throw new Error(`Missing package file: ${required}`);
  }
  for (const path of files) {
    if (
      !/^(dist\/[A-Za-z0-9_/-]+(?:\.js|\.d\.ts)|proto\/[A-Za-z0-9_/-]+\.proto|README\.md|LICENSE|package\.json)$/.test(
        path,
      )
    ) {
      throw new Error(`Unexpected package content: ${path}`);
    }
    if (/\.(?:pem|key|p12|pfx)$|(?:^|\/)\.env(?:\.|$)/i.test(path))
      throw new Error(`Secret-like package path: ${path}`);
  }
  writeFileSync(
    join(temporary, "package.json"),
    JSON.stringify({ private: true, type: "module" }),
  );
  execFileSync(
    "npm",
    [
      "install",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      resolve(temporary, packed[0].filename),
    ],
    { cwd: temporary, stdio: "inherit", env },
  );
  writeFileSync(
    join(temporary, "verify.mjs"),
    `import {ScreenClient} from '@cjahv/mediflow-screen-sdk'; const client = new ScreenClient({baseURL:'https://example.test',token:'fixture'}); if (client.isConnected) throw Error('unexpected connection'); client.close();`,
  );
  execFileSync(process.execPath, [join(temporary, "verify.mjs")], {
    stdio: "inherit",
  });
  console.log("Packed SDK installed and imported in an empty consumer project");
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
