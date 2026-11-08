#!/usr/bin/env python3
"""Verify a reviewed private source SHA without exposing or retaining source/logs.

Used by the protected verification and release workflows.
"""
import argparse
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile
import urllib.request

PUBLIC = 'cjahv/mediflow-frontend-sdk'
PRIVATE = 'cjahv/mediflow'
ROOT = Path(__file__).resolve().parents[1]


def validate(policy, env):
    if (env.get('GITHUB_REPOSITORY') != PUBLIC
            or env.get('GITHUB_EVENT_NAME') != 'workflow_dispatch'
            or env.get('GITHUB_REF') != 'refs/heads/main'
            or env.get('GITHUB_WORKFLOW_REF') not in {PUBLIC + '/.github/workflows/' + name + '@refs/heads/main' for name in ('verify-private-source.yml', 'release-platform.yml')}):
        raise ValueError('trusted default-branch dispatch required')
    if policy.get('enabled') is not True:
        raise ValueError('migration disabled until source acceptance and credential setup are complete')
    if policy.get('repository') != PRIVATE or not re.fullmatch('[0-9a-f]{40}', policy.get('commit') or ''):
        raise ValueError('reviewed immutable source identity required')
    if policy.get('image') != 'ghcr.io/cjahv/mediflow' or policy.get('platforms') != ['linux/amd64', 'linux/arm64']:
        raise ValueError('unexpected release destination or architecture policy')
    return policy['commit']


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


def metadata(path, token):
    req = urllib.request.Request('https://api.github.com/repos/' + PRIVATE + path,
                                 headers={'Authorization': 'Bearer ' + token,
                                          'Accept': 'application/vnd.github+json',
                                          'X-GitHub-Api-Version': '2022-11-28'})
    with urllib.request.build_opener(NoRedirect).open(req, timeout=30) as response:
        return json.load(response)


def trusted_identity(repo, compare, sha, require_main=True):
    return (repo.get('private') is True and repo.get('full_name') == PRIVATE
            and compare.get('base_commit', {}).get('sha') == sha
            and (not require_main or compare.get('merge_base_commit', {}).get('sha') == sha))


def verify_checkout(sha, token, destination=None):
    if not trusted_identity(metadata('', token), metadata('/compare/' + sha + '...main', token), sha, require_main=os.environ.get('PUBLISH_IMAGE', 'true') != 'false'):
        raise ValueError('private source identity or main ancestry mismatch')
    # Never run private source here. Keep authentication out of URL/config/arguments.
    with tempfile.TemporaryDirectory(prefix='private-source-') as directory:
        root = Path(directory)
        askpass = root / 'askpass'
        askpass.write_text('#!/bin/sh\ncase "$1" in *Username*) printf "%s\\n" x-access-token;; *) printf "%s\\n" "$PLATFORM_READ_TOKEN";; esac\n')
        askpass.chmod(0o700)
        env = dict(os.environ, GIT_ASKPASS=str(askpass), GIT_TERMINAL_PROMPT='0',
                   GIT_CONFIG_NOSYSTEM='1', GIT_CONFIG_GLOBAL='/dev/null')
        checkout = destination if destination is not None else root / 'source'
        checkout.mkdir()
        def git(*args):
            result = subprocess.run(['git', '-c', 'credential.helper=', *args], cwd=checkout,
                                    env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=180)
            if result.returncode:
                raise RuntimeError('private source operation failed; details suppressed')
            return result.stdout.decode().strip()
        git('init', '-q')
        git('remote', 'add', 'origin', 'https://github.com/' + PRIVATE + '.git')
        git('fetch', '-q', '--no-tags', '--depth=1', 'origin', sha)
        git('lfs', 'install', '--local')
        git('checkout', '-q', '--detach', sha)
        if git('rev-parse', 'HEAD') != sha:
            raise ValueError('checked-out SHA mismatch')
    # The helper is removed here; persistent source is removed by always-run workflow cleanup.


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--fetch', action='store_true')
    parser.add_argument('--checkout', action='store_true')
    args = parser.parse_args()
    sha = validate(json.loads((ROOT / 'release/platform-source.json').read_text()), os.environ)
    if args.fetch or args.checkout:
        token = os.environ.get('PLATFORM_READ_TOKEN', '')
        if not token:
            raise ValueError('missing environment-scoped private Contents read credential')
        destination = Path(os.environ['RUNNER_TEMP']) / 'private-source' if args.checkout else None
        verify_checkout(sha, token, destination)
        print('Private source identity verified; no artifact published.')
    else:
        print('Reviewed policy checked; private source access has not run.')


if __name__ == '__main__':
    try:
        main()
    except Exception:
        # Even network/git exceptions can carry private paths, refs or server details.
        raise SystemExit('Private-source verification blocked. No source or diagnostic log is published.') from None
