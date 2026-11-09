#!/usr/bin/env bash
# Invoked only by run-private.py with captured output and no private-read token.
set -euo pipefail
# Publish only the failing line number of THIS PUBLIC script, never private output.
trap 'printf "%s\n" "$LINENO" > "$RUNNER_TEMP/private-logs/stage"' ERR
export PATH="$(go env GOPATH)/bin:$PATH"
python3 -m pip install PyYAML==6.0.3
python3 scripts/release/check-manifest.py
python3 scripts/release/test-release-safety.py
python3 scripts/test-bootstrap-sdks.py
python3 scripts/test-sqlite-backup.py
python3 scripts/test-release-container-policy.py
python3 scripts/test-image-reproducibility.py
python3 scripts/test-image-layers.py
python3 scripts/release/test-sdk-version-free.py
python3 scripts/release/test-sdk-privacy.py
python3 scripts/release/test-git-sdk.py
python3 scripts/release/test-anonymous-consumers.py
python3 scripts/check-lfs.py
git lfs fsck
(cd mediflow-platform && go mod download && go mod verify && test -z "$(gofmt -l $(rg --files -g '*.go'))" && go test -race -count=1 ./... && go vet ./... && go build -buildvcs=false ./...)
(cd mediflow-platform && go test -race -count=1 -v -run '^TestPostgres(Integration|BackupRestore)$' ./internal/platform)
go install golang.org/x/vuln/cmd/govulncheck@v1.9.0
(cd mediflow-platform && govulncheck ./...)
mvn -B -ntp -f mediflow-backend-sdk/pom.xml install
mvn -B -ntp -f mediflow-java-proxy/pom.xml verify
mvn -B -ntp -f mediflow-backend-sdk/pom.xml org.apache.maven.plugins:maven-dependency-plugin:3.8.1:tree -Dscope=runtime -DoutputType=json -DoutputFile=target/dependency-tree.json
python3 scripts/test-java-dependencies.py
python3 scripts/check-java-dependencies.py
mvn -B -ntp -f mediflow-java-proxy/pom.xml org.apache.maven.plugins:maven-dependency-plugin:3.8.1:tree -Dscope=runtime -DoutputType=json -DoutputFile=target/dependency-tree.json
python3 scripts/check-java-dependencies.py mediflow-java-proxy/target/dependency-tree.json
npm ci --prefix mediflow-frontend-sdk
npm run build --prefix mediflow-frontend-sdk
npm ci --prefix mediflow-platform/web
npm test --prefix mediflow-platform/web
npm run build --prefix mediflow-platform/web
npm run format:check --prefix mediflow-platform/web
npm audit --prefix mediflow-platform/web --omit=dev --audit-level=high
proto_dir=$(mktemp -d)
trap 'rm -rf "$proto_dir"' EXIT
curl --fail --location --retry 3 https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip -o "$proto_dir/protoc.zip"
unzip -q "$proto_dir/protoc.zip" -d "$proto_dir/protoc"
export PATH="$proto_dir/protoc/bin:$PATH"
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.36.12
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.6.2
npm ci --prefix protocol
npm run generate --prefix protocol
python3 scripts/bootstrap-sdks.py --check
git diff --exit-code -- protocol mediflow-platform/internal/pb mediflow-platform/internal/wire mediflow-platform/proto mediflow-platform/web/src/api mediflow-backend-sdk/proto mediflow-frontend-sdk/src/protobuf.ts mediflow-frontend-sdk/src/generated mediflow-frontend-sdk/proto
bash scripts/integration.sh
(cd mediflow-platform/web && npx playwright install --with-deps chromium)
BASH_ENV="$(dirname "${BASH_SOURCE[0]}")/browser-phase-trap.sh" bash scripts/browser-test.sh

