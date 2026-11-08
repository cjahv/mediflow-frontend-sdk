# Two-repository migration

## Preserved contracts

Use the existing public `cjahv/mediflow-frontend-sdk` repository for both SDKs and release automation; do not rename it or move existing immutable distribution tags. `v0.6.0-rc.1` remains at `541e571ebdcff953bca438670d4695e815305229`. Keep Java coordinates `io.github.cjahv.mediflow:mediflow-backend-sdk:0.8.0-rc.1`, protocol version 3 and each existing MIT license. A published Maven version cannot be replaced. No Central account or signing credential is changed here.

The SDK import is limited to the explicit SDK-only file inventory in `sdk-import.json`. No platform directory, Java platform proxy, database, screenshots, source Git history or private workflow is copied. POM SCM metadata now points to this public repository; package coordinates and licenses are unchanged.

## Current stage and blockers

Public SDK import PR #1 is merged at `bedd6a68caebfc0136396ef0c31ce2c29bc0ea2d`. Its actual public CI passed screen SDK tests and Java 17/21 checks. The protected environment is `platform-release`, restricted to branch `main` with no tags. Its `PLATFORM_READ_TOKEN` has private platform Contents read only; the GHCR package grants this public repository Actions Write. Neither credential is moved or expanded by this change.

The next draft implements manual platform and SDK release workflows. Platform publishing remains deliberately disabled in `platform-source.json` until the final private integration patch is available as a full GitHub SHA and the private SDK source lock exists. No new platform image has been published or accepted by these workflows. Private Actions quota failures are not successful validation.

`release-platform.yml` defaults to `publish=false`: it runs public SDK CI, captured private quality checks, Java 21 proxy checks, native amd64/arm64 image build/smoke checks and runtime vulnerability/layer audits. With publication explicitly enabled, it transfers only audited final image archives, pushes those exact tested bytes, constructs the index from their digests, and verifies anonymous native pulls and runtime behavior. It never exports build caches, workspaces or private logs. The source lock must identify an immutable public SDK commit whose two SDK trees exactly match the publishing checkout.

`release-sdks.yml` preserves existing coordinates and immutable distribution tags. Existing versions are rejected on publication. Java Central publication remains dependent on the separately managed, existing namespace/signing credentials; this migration does not provision them.

Next steps:

1. Complete private platform acceptance (HTTP 9999, gRPC 9090, native amd64/arm64, SQLite/PostgreSQL, TLS, persistence, UI and security). Review its immutable full commit SHA, then update `platform-source.json` through a reviewed default-branch PR. Never select a mutable branch or unreviewed user input as build source.
2. Configure a public-repository environment named `platform-release`, limited to the default branch with default-branch deployment protection. Store `PLATFORM_READ_TOKEN` there: fine-grained token scoped only to `cjahv/mediflow`, Contents read (Metadata read implicit). Do not give it Actions write, Contents write, packages write, administration or access to other repositories. A narrowly scoped GitHub App installation token is preferable if available. No credential is created, copied or widened by this draft.
3. Verify the existing `ghcr.io/cjahv/mediflow` package grants this repository Actions write access. Use this repository's short-lived GITHUB_TOKEN with packages write only in publishing jobs; do not reuse the private-read token. Keep package public and source repository private. Initial manual dispatch avoids requiring any cross-repository dispatch token.
4. Validate the implemented native architecture release jobs using the reviewed source. All checkout actions and build actions must be pinned to reviewed commit SHAs. Private checkout, build and test output must be redirected to ephemeral files with only generic failure messages in public logs. Never print private command traces, commit messages, application logs or failure reports. Delete the private checkout and private logs in an always-run cleanup step.
5. Retain no private build cache outside the ephemeral runner: no actions/cache, GHA/registry BuildKit cache exporters, build-record upload, source provenance attachments, source maps or debug/source reports. Disable automatic build-record/provenance uploads. Only explicitly reviewed final SDK distributions and final runtime images may cross jobs or be published; no workspace/glob upload.
6. Validate final image filesystem and layers against the expected runtime layout, reject source/history/credentials, run smoke/Compose/TLS/security scans, then publish the exact tested bytes and compose the multiarch index. Re-pull each architecture anonymously on native runners and compare config/digest. Use a new RC version for SDK publication rather than overwriting existing tags/coordinates.
7. After real release validation succeeds, pin private SDK consumers to the reviewed public SDK commit/version, remove duplicate private SDK ownership and disable private publishing jobs in the same cutover PR. Preserve the exact-SHA CI gate and deduplication from private PR #18.

## External contributions

Fork and branch PR workflows have contents read only, no environment, no private-read or registry secret, no workflow_run/pull_request_target bridge and no private artifacts. Privileged source verification is manual-only, default-branch-only, and refuses all other repository/event/ref identities before a protected-environment job can start. The second guard runs again before any network access in the credential-bearing step. A reviewed public default branch is part of the trust boundary; do not approve changes that expose secrets, accept arbitrary source refs or upload private files.

## Evidence limitations

Private Actions allowance is exhausted. Local SDK tests and static checks are not evidence of successful native image, Java 21, live cross-repository or release execution. Keep the platform publisher disabled and this implementation as a draft until its boundaries and the final source SHA are accepted. Local static tests do not validate the Docker archive policy against a real final image.
