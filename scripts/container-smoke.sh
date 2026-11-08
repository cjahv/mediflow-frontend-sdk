#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
name="mediflow-ci-${RANDOM}"; volume="${name}-data"
cleanup(){ docker rm -f "$name" >/dev/null 2>&1 || true; docker volume rm "$volume" >/dev/null 2>&1 || true; }
trap cleanup EXIT
docker volume create "$volume" >/dev/null
start(){ docker run -d --init --cap-drop ALL --security-opt no-new-privileges --name "$name" -p 127.0.0.1:18082:9999 -v "$volume:/data" -e MEDIFLOW_ADMIN_USERNAME=ci -e MEDIFLOW_ADMIN_PASSWORD=ci-container-only "$@" mediflow:ci >/dev/null; }
ready(){ for _ in $(seq 1 60); do if curl -fsS http://127.0.0.1:18082/mediflow/ready >/dev/null; then return; fi; sleep 1; done; return 1; }
verify_internal_port(){
  # Run inside the container network namespace, bypassing all host port mappings.
  docker exec "$name" wget -q -O /dev/null http://127.0.0.1:9999/mediflow/ready
  docker exec "$name" awk '$2 ~ /:270F$/ && $4 == "0A" { found=1 } END { exit !found }' /proc/net/tcp /proc/net/tcp6
  docker exec "$name" awk '$2 ~ /:1F90$/ && $4 == "0A" { found=1 } END { exit found }' /proc/net/tcp /proc/net/tcp6
  echo "PASS: container-internal HTTP readiness and LISTEN socket on 9999; no listener on 8080"
}
start; ready
verify_internal_port
# Readiness is not enough: the supervised Java SDK proxy must really run.
docker exec "$name" sh -c 'java -version && test -r /app/java-proxy/mediflow-java-proxy.jar && test ! -w /app/java-proxy/mediflow-java-proxy.jar'
docker exec "$name" sh -c 'test -n "$(pidof java)"'
for _ in $(seq 1 20); do
  if [[ "$(docker inspect -f '{{.State.Health.Status}}' "$name")" == healthy ]]; then break; fi
  sleep 1
done
test "$(docker inspect -f '{{.State.Health.Status}}' "$name")" = healthy
node scripts/container-fixture.mjs create
curl -fsS http://127.0.0.1:18082/mediflow/ | grep -q 'id="root"'
docker exec "$name" sh -c 'test "$(id -u)" = 10001 && test -s /data/mediflow.sqlite && test -w /data/mediflow.sqlite'
docker stop --time 25 "$name" >/dev/null
test "$(docker inspect -f '{{.State.ExitCode}}' "$name")" = 0
docker rm "$name" >/dev/null
# Empty the image setting to exercise the compiled program default as well.
start -e MEDIFLOW_LISTEN=; ready
verify_internal_port
node scripts/container-fixture.mjs verify
curl -fsS http://127.0.0.1:18082/mediflow/ >/dev/null
docker stop --time 25 "$name" >/dev/null
test "$(docker inspect -f '{{.State.ExitCode}}' "$name")" = 0
# A dead Java child must not leave an apparently healthy Go-only service.
docker rm "$name" >/dev/null
start; ready
docker exec "$name" sh -c 'kill -KILL $(pidof java)'
exited=0
for _ in $(seq 1 30); do
  if [[ "$(docker inspect -f '{{.State.Running}}' "$name")" == false ]]; then exited=1; break; fi
  sleep 1
done
test "$exited" = 1
# An orchestrator must be able to distinguish child failure from a clean stop.
test "$(docker inspect -f '{{.State.ExitCode}}' "$name")" != 0
