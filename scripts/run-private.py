#!/usr/bin/env python3
"""Run fixed validation/build commands with private output kept off public Actions logs."""
import argparse
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

PUBLIC = Path(__file__).resolve().parents[1]
TEMP = Path(os.environ.get('RUNNER_TEMP', '/nonexistent'))
SOURCE = TEMP / 'private-source'


def sanitized_env():
    return {key: value for key, value in os.environ.items()
            if not key.startswith(('GITHUB_', 'ACTIONS_'))
            and not any(word in key.upper() for word in ('TOKEN', 'SECRET', 'CREDENTIAL'))}


def execute(command, *, cwd=SOURCE, env=None):
    log_dir = TEMP / 'private-logs'; log_dir.mkdir(exist_ok=True)
    with (log_dir / 'output.log').open('ab') as log:
        result = subprocess.run(command, cwd=cwd, env=env or sanitized_env(), stdout=log, stderr=log)
    if result.returncode:
        stage_path=log_dir/'stage'
        stage=stage_path.read_text().strip() if stage_path.is_file() else ''
        if stage.isdigit() and 0 < int(stage) < 200:
            print('Private validation failed at public quality script line '+stage, flush=True)
        raise RuntimeError('Private validation failed; no private diagnostics are uploaded.')


def materialize_sdks():
    lock = json.loads((SOURCE / 'release/sdk-source.json').read_text())
    import re
    if lock.get('repository') != 'cjahv/mediflow-frontend-sdk' or not re.fullmatch('[0-9a-f]{40}', lock.get('commit', '')):
        raise ValueError('private platform requires a reviewed SDK source lock')
    # Fetch public Git objects without credentials; the private token is not in this step.
    env = sanitized_env(); env.update(GIT_CONFIG_NOSYSTEM='1', GIT_CONFIG_GLOBAL='/dev/null', GIT_TERMINAL_PROMPT='0')
    execute(['git', '-c', 'credential.helper=', 'fetch', '-q', '--no-tags', 'https://github.com/cjahv/mediflow-frontend-sdk.git', lock['commit']], cwd=PUBLIC, env=env)
    for name in ('mediflow-frontend-sdk', 'mediflow-backend-sdk'):
        def tree(ref):
            return subprocess.check_output(['git', 'rev-parse', ref + ':' + name], cwd=PUBLIC, env=env, stderr=subprocess.DEVNULL).strip()
        if tree(lock['commit']) != tree('HEAD'):
            raise ValueError('SDK source differs from the reviewed private lock')
        target = SOURCE / name
        if target.exists(): shutil.rmtree(target)
        paths = subprocess.check_output(['git', 'ls-files', name], cwd=PUBLIC, env=env, text=True).splitlines()
        for path in paths:
            original = PUBLIC / path
            if original.is_symlink() or not original.is_file(): raise ValueError('unsafe SDK source')
            dest = SOURCE / path; dest.parent.mkdir(parents=True, exist_ok=True); shutil.copyfile(original, dest)


def main():
    parser = argparse.ArgumentParser(); parser.add_argument('mode', choices=['quality', 'java21', 'candidate', 'verify-image'])
    args = parser.parse_args()
    if args.mode != 'verify-image':
        materialize_sdks()
    if args.mode == 'java21':
        execute(['mvn', '-B', '-ntp', '-f', 'mediflow-backend-sdk/pom.xml', 'install'])
        execute(['mvn', '-B', '-ntp', '-f', 'mediflow-java-proxy/pom.xml', 'verify'])
    elif args.mode == 'quality':
        execute(['bash', str(PUBLIC / 'scripts/quality-platform.sh')])
    else:
        if args.mode == 'candidate':
            policy = json.loads((PUBLIC / 'release/platform-source.json').read_text())
            version = os.environ['IMAGE_TAG']
            if version != 'latest' and json.loads((SOURCE / 'release/manifest.json').read_text())['platformVersion'] != version:
                raise ValueError('RC version differs from source manifest')
            execute(['bash', 'scripts/build-image.sh', 'mediflow:ci', version, policy['commit']])
        execute(['npm', 'ci', '--prefix', 'mediflow-platform/web', '--omit=dev'])
        execute(['bash', 'scripts/container-smoke.sh'])
        if args.mode == 'candidate': execute(['bash', 'scripts/compose-release-smoke.sh'])
    print('Private validation completed successfully; no source or logs uploaded.')


if __name__ == '__main__':
    try: main()
    except Exception:
        raise SystemExit('Private build or validation failed. Source and failure logs remain ephemeral and are not published.') from None
