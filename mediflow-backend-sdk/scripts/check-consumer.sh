#!/usr/bin/env bash
# Run after mvn install; verifies consumption as an ordinary Maven dependency outside this project.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$TMP/src/main/java"
cat > "$TMP/pom.xml" <<'POM'
<project xmlns="http://maven.apache.org/POM/4.0.0"><modelVersion>4.0.0</modelVersion>
<groupId>integration</groupId><artifactId>sdk-consumer</artifactId><version>1</version>
<properties><maven.compiler.release>17</maven.compiler.release><project.build.sourceEncoding>UTF-8</project.build.sourceEncoding></properties>
<dependencies><dependency><groupId>io.github.cjahv.mediflow</groupId><artifactId>mediflow-backend-sdk</artifactId><version>0.8.0-rc.1</version></dependency></dependencies>
<build><plugins><plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-compiler-plugin</artifactId><version>3.14.1</version></plugin></plugins></build>
</project>
POM
cp "$ROOT/examples/ProducerExample.java" "$TMP/src/main/java/"
# Maven options (e.g. local settings/cache) may be passed by CI or the caller, never stored credentials.
mvn -B "$@" -f "$TMP/pom.xml" package
