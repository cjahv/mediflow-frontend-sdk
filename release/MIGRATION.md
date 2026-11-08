# Two-repository migration

## Preserved contracts

Use the existing public `cjahv/mediflow-frontend-sdk` repository for both SDKs and release automation; do not rename it or move existing immutable distribution tags. `v0.6.0-rc.1` remains at `541e571ebdcff953bca438670d4695e815305229`. Keep Java coordinates `io.github.cjahv.mediflow:mediflow-backend-sdk:0.8.0-rc.1`, protocol version 3 and each existing MIT license. A published Maven version cannot be replaced. No Central account or signing credential is changed here.

The SDK import is limited to the explicit SDK-only file inventory in `sdk-import.json`. No platform directory, Java platform proxy, database, screenshots, source Git history or private workflow is copied. POM SCM metadata now points to this public repository; package coordinates and licenses are unchanged.

## Current stage and blockers

SDK sources and unprivileged CI are staged here. Trusted platform-source preflight is present but deliberately disabled in `platform-source.json`: no final integrated #16/#17 SHA has yet passed all runtime acceptance, and no private-read credential or GHCR package access has been verified in this repository. There is no active image or Central publisher in this draft. The private platform's existing code and release pipeline remain in place until the new path is actually tested; do not merge a partial cutover that breaks releases.

Next steps:

1. Complete private platform acceptance (HTTP 9999, gRPC 9090, native amd64/arm64, SQLite/PostgreSQL, TLS, persistence, UI and security). Review its immutable full commit SHA, then update `platform-source.json` through a reviewed default-branch PR. Never select a mutable branch or unreviewed user input as build source.
2. Configure a public-repository environment named `private-platform-release`, limited to the default branch with required reviewer protection. Store `PLATFORM_READ_TOKEN` there: fine-grained token scoped only to `cjahv/mediflow`, Contents read (Metadata read implicit). Do not give it Actions write, Contents write, packages write, administration or access to other repositories. A narrowly scoped GitHub App installation token is preferable if available. No credential is created, copied or widened by this draft.
3. Verify the existing `ghcr.io/cjahv/mediflow` package grants this repository Actions write access. Use this repository's short-lived GITHUB_TOKEN with packages write only in publishing jobs; do not reuse the private-read token. Keep package public and source repository private. Initial manual dispatch avoids requiring any cross-repository dispatch token.
4. Add and validate native architecture release jobs using the reviewed source. All checkout actions and build actions must be pinned to reviewed commit SHAs. Private checkout, build and test output must be redirected to ephemeral files with only generic failure messages in public logs. Never print private command traces, commit messages, application logs or failure reports. Delete the private checkout and private logs in an always-run cleanup step.
5. Retain no private build cache outside the ephemeral runner: no actions/cache, GHA/registry BuildKit cache exporters, build-record upload, source provenance attachments, source maps or debug/source reports. Disable automatic build-record/provenance uploads. Only explicitly reviewed final SDK distributions and final runtime images may cross jobs or be published; no workspace/glob upload.
6. Validate final image filesystem and layers against the expected runtime layout, reject source/history/credentials, run smoke/Compose/TLS/security scans, then publish the exact tested bytes and compose the multiarch index. Re-pull each architecture anonymously on native runners and compare config/digest. Use a new RC version for SDK publication rather than overwriting existing tags/coordinates.
7. After real release validation succeeds, pin private SDK consumers to the reviewed public SDK commit/version, remove duplicate private SDK ownership and disable private publishing jobs in the same cutover PR. Preserve the exact-SHA CI gate and deduplication from private PR #18.

## External contributions

Fork and branch PR workflows have contents read only, no environment, no private-read or registry secret, no workflow_run/pull_request_target bridge and no private artifacts. Privileged source verification is manual-only, default-branch-only, and refuses all other repository/event/ref identities before a protected-environment job can start. The second guard runs again before any network access in the credential-bearing step. A reviewed public default branch is part of the trust boundary; do not approve changes that expose secrets, accept arbitrary source refs or upload private files.

## Evidence limitations

Private Actions allowance is exhausted. Local SDK tests and static checks are not evidence of successful native image, Java 21, live cross-repository or release execution. Keep this migration as a draft until these boundaries are validated with the actual configured credentials and final source SHA.
