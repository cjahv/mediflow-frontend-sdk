#!/usr/bin/env python3
"""Export only the prebuilt public screen SDK. Never copy source Git history."""
import json
from pathlib import Path
import re
import shutil
import sys

REPOSITORY = 'cjahv/mediflow-frontend-sdk'
ROOT = Path(__file__).resolve().parents[2]

def export(source, destination):
    if destination.exists():
        raise ValueError('destination must not exist')
    package = json.loads((source / 'package.json').read_text())
    if package['name'] != '@cjahv/mediflow-screen-sdk' or not re.fullmatch(r'\d+\.\d+\.\d+-rc\.\d+', package['version']):
        raise ValueError('unexpected package/version')
    # Explicit field and file allowlists: no scripts, dev dependencies, source maps,
    # source repository metadata, tests, dotfiles, symlinks or private source history.
    fields = ('name', 'version', 'type', 'description', 'main', 'types', 'exports', 'engines', 'license', 'dependencies')
    public = {key: package[key] for key in fields}
    public.update(files=['dist', 'proto', 'LICENSE', 'README.md'],
                  repository={'type': 'git', 'url': f'git+https://github.com/{REPOSITORY}.git'},
                  homepage=f'https://github.com/{REPOSITORY}')
    paths = []
    for dirname, suffixes in [('dist', ('.js', '.d.ts')), ('proto', ('.proto',))]:
        folder = source / dirname
        if folder.is_symlink() or not folder.is_dir():
            raise ValueError('missing or unsafe ' + dirname)
        for path in folder.rglob('*'):
            if path.is_symlink(): raise ValueError('symlink in artifact')
            if path.is_file():
                if any(part.startswith('.') for part in path.relative_to(folder).parts) or not path.name.endswith(suffixes):
                    raise ValueError('unexpected artifact file: ' + str(path))
                paths.append(path)
    for required in ['dist/index.js', 'dist/index.d.ts', 'LICENSE']:
        p = source / required
        if p.is_symlink() or not p.is_file(): raise ValueError('missing or unsafe ' + required)
    paths.append(source / 'LICENSE')
    destination.mkdir(parents=True)
    for path in paths:
        target = destination / path.relative_to(source)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(path, target)
    (destination / 'package.json').write_text(json.dumps(public, indent=2, ensure_ascii=False) + '\n')
    version = package['version']
    (destination / 'README.md').write_text(f'''# Mediflow Screen SDK

Prebuilt JavaScript and TypeScript declarations for unattended Mediflow screens.
This immutable release tag contains distribution files. The development branch contains the public SDK sources; platform source and history remain private.

```sh
npm install git+https://github.com/{REPOSITORY}.git#v{version}
```

```ts
import {{ ScreenClient }} from '@cjahv/mediflow-screen-sdk';
const client = new ScreenClient({{
  baseURL: 'https://your-platform.example',
  token: 'your-screen-token',
  onSnapshot(snapshot) {{
    // Replace with your screen rendering. These are current queues, not history.
    console.log(snapshot.data.queues);
  }},
}});
await client.start(); // SDK connects, authenticates and obtains the initial snapshot.
// Subsequent snapshots update automatically. Call client.close() on teardown.
// Keep screen tokens out of URLs and source control.
```

Each release has a fixed version tag. CI refuses to replace an existing tag.
Commit the consumer lockfile to pin the resolved Git commit. No npmjs account is required.
Runtime dependencies are downloaded from their public npm registry.
License: MIT (see LICENSE).
''')
    return version

if __name__ == '__main__':
    print(export(ROOT / 'mediflow-frontend-sdk', Path(sys.argv[1])))
