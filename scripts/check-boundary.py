#!/usr/bin/env python3
"""Audit the explicitly reviewed public source inventory; never glob-copy private files."""
import hashlib
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
CONTROL = {
 'README.md', '.gitignore', '.github/workflows/sdk-ci.yml', '.github/workflows/verify-private-source.yml',
 'release/sdk-import.json', 'release/platform-source.json', 'release/MIGRATION.md',
 'scripts/check-boundary.py', 'scripts/test-boundary.py', 'scripts/private-source.py',
}


def allowed_paths(manifest):
    sdk = set(manifest['files'])
    for name in sdk:
        path = Path(name)
        if path.is_absolute() or '..' in path.parts or path.parts[0] not in ('mediflow-frontend-sdk', 'mediflow-backend-sdk'):
            raise ValueError('invalid SDK source inventory')
        hidden_configs = {'mediflow-backend-sdk/.gitignore', 'mediflow-frontend-sdk/.gitignore', 'mediflow-frontend-sdk/.prettierignore'}
        if name not in hidden_configs and any(part.startswith('.') for part in path.parts):
            raise ValueError('hidden SDK file in inventory')
    return sdk | CONTROL


def check_tree(root, tracked, manifest):
    allowed = allowed_paths(manifest)
    if set(tracked) != allowed:
        raise ValueError('public source inventory mismatch')
    for name in tracked:
        path = root / name
        if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(root.resolve()):
            raise ValueError('unsafe public source path')
    for name, expected in manifest['files'].items():
        expected = manifest.get('adjustedFiles', {}).get(name, expected)
        if hashlib.sha256((root / name).read_bytes()).hexdigest() != expected:
            raise ValueError('SDK import differs from reviewed inventory')
    for workflow in (root / '.github/workflows').glob('*.yml'):
        text = workflow.read_text()
        for uses in re.findall(r'uses:\s*(\S+)', text):
            if not re.fullmatch(r'[\w-]+/[\w-]+@[0-9a-f]{40}', uses):
                raise ValueError('unpinned action')
        for forbidden in ['pull_request_target:', 'workflow_run:', 'actions/cache', 'upload-artifact',
                          'secrets: inherit', 'cache-to:', 'cache-from:', 'persist-credentials: true']:
            if forbidden in text: raise ValueError('unsafe workflow capability')
    ci = (root / '.github/workflows/sdk-ci.yml').read_text()
    if 'secrets.' in ci or 'environment:' in ci or 'packages: write' in ci or 'contents: write' in ci:
        raise ValueError('public PR CI must be unprivileged')


def main():
    manifest = json.loads((ROOT / 'release/sdk-import.json').read_text())
    tracked = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard'], cwd=ROOT, text=True).splitlines()
    check_tree(ROOT, tracked, manifest)
    print('Public inventory verified: SDK files and reviewed automation only.')


if __name__ == '__main__': main()
