# Mediflow SDKs

Public home for the screen TypeScript SDK and Java backend SDK. Platform application source remains private. Each SDK retains its existing MIT license; this migration does not change either package's license or version.

- [Screen SDK](mediflow-frontend-sdk/README.md): `@cjahv/mediflow-screen-sdk`
- [Java SDK](mediflow-backend-sdk/README.md): `io.github.cjahv.mediflow:mediflow-backend-sdk`

Existing prebuilt Git tags remain immutable and keep their root package layout:

```sh
npm install git+https://github.com/cjahv/mediflow-frontend-sdk.git#v0.6.0-rc.1
```

The development branch uses SDK subdirectories. Do not substitute `#main` for an immutable distribution tag. Future screen SDK tags must continue exporting a prebuilt root package, not tag this monorepo source layout.

SDK PR CI has no private-source or publishing credentials. See [migration status and release boundaries](release/MIGRATION.md). This draft stages the repository split; it does not claim platform release migration or live platform validation is complete.
