#!/usr/bin/env python3
"""Push a distribution-only orphan commit and a new immutable version tag."""
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import urllib.request

REPOSITORY = 'cjahv/mediflow-frontend-sdk'

def run(*args, cwd=None, env=None):
    return subprocess.check_output(args, cwd=cwd, env=env, text=True).strip()

def publish(artifact):
    version = json.loads((artifact / 'package.json').read_text())['version']
    if not re.fullmatch(r'\d+\.\d+\.\d+-rc\.\d+', version): raise ValueError('invalid RC')
    tag = 'v' + version
    # Anonymous metadata verifies destination ownership and public visibility.
    with urllib.request.urlopen('https://api.github.com/repos/' + REPOSITORY, timeout=30) as response:
        repo = json.load(response)
    if repo.get('private') is not False or repo.get('full_name') != REPOSITORY:
        raise ValueError('destination must be the expected public artifact repository')
    if not repo.get('default_branch'):
        raise ValueError('initialize public default branch with README before Git installation')
    token = os.environ['SDK_GIT_TOKEN']
    if not token: raise ValueError('missing scoped artifact repository token')
    # Credentials live only in the askpass environment, never URL, arguments or Git config.
    with tempfile.TemporaryDirectory(prefix='sdk-publish-') as temp:
        askpass = Path(temp) / 'askpass'
        askpass.write_text('#!/bin/sh\ncase "$1" in *Username*) printf "%s\\n" x-access-token;; *) printf "%s\\n" "$SDK_GIT_TOKEN";; esac\n')
        askpass.chmod(0o700)
        env = dict(os.environ, GIT_ASKPASS=str(askpass), GIT_TERMINAL_PROMPT='0', GIT_CONFIG_NOSYSTEM='1', GIT_CONFIG_GLOBAL='/dev/null')
        remote = 'https://github.com/' + REPOSITORY + '.git'
        if not run('git', 'ls-remote', '--heads', remote, 'refs/heads/' + repo['default_branch'], cwd=artifact, env=env):
            raise ValueError('public default branch must exist')
        refs = run('git', 'ls-remote', '--tags', remote, 'refs/tags/' + tag, cwd=artifact, env=env)
        if refs: raise ValueError('version already exists; reconcile partial publication, never overwrite')
        if (artifact / '.git').exists(): raise ValueError('artifact must not contain source Git history')
        run('git', 'init', '--initial-branch=distribution', str(artifact))
        run('git', '-c', 'user.name=Mediflow release', '-c', 'user.email=release@users.noreply.github.com', 'add', '.', cwd=artifact)
        run('git', '-c', 'user.name=Mediflow release', '-c', 'user.email=release@users.noreply.github.com', 'commit', '-m', 'Release ' + tag, cwd=artifact)
        run('git', 'tag', tag, cwd=artifact)
        # Push only a new tag, not main, and never force. A concurrent winner makes this fail safely.
        run('git', 'push', remote, 'refs/tags/' + tag + ':refs/tags/' + tag, cwd=artifact, env=env)
        print('Published ' + REPOSITORY + '#' + tag)

if __name__ == '__main__': publish(Path(sys.argv[1]).resolve())
