#!/usr/bin/env python3
"""Audit every saved runtime-image layer before any public upload, even deleted files."""
import argparse
import hashlib
import io
import json
from pathlib import PurePosixPath
import re
import tarfile
import zipfile

SOURCE_SUFFIXES = ('.go', '.java', '.ts', '.map', '.py', '.pyc', '.sqlite', '.sqlite3', '.db', '.jmod')
FORBIDDEN_PARTS = {'.git', '.ssh', '.aws', '.npmrc', '.netrc', 'node_modules', 'src.zip'}
SYSTEM_ROOTS = {'bin', 'sbin', 'lib', 'usr', 'etc', 'var', 'dev', 'proc', 'sys', 'run', 'tmp', 'root', 'home', 'data', 'opt', 'mnt', 'media', 'srv'}


def safe_name(raw):
    name = raw.removeprefix('./')
    path = PurePosixPath(name)
    if path.is_absolute() or '..' in path.parts or '\\' in name:
        raise ValueError('unsafe image archive path')
    return path


def audit_member(member):
    path = safe_name(member.name)
    if not path.parts:
        return
    if set(path.parts) & FORBIDDEN_PARTS or any(part == '.env' or part.startswith('.env.') for part in path.parts):
        raise ValueError('private material in runtime layer')
    if path.name.endswith(SOURCE_SUFFIXES) or path.name.endswith(('.key', '.p12', '.pfx')):
        raise ValueError('source, data or key material in runtime layer')
    if member.issym() or member.islnk():
        if set(PurePosixPath(member.linkname).parts) & FORBIDDEN_PARTS:
            raise ValueError('unsafe runtime link')
    if not member.isfile() or path.name.startswith('.wh.'):
        return
    if path.parts[0] == 'app':
        exact = {'app/mediflow', 'app/java-proxy/mediflow-java-proxy.jar'}
        web = re.fullmatch(r'app/web/dist/(?:[A-Za-z0-9_/-]+\.(?:html|js|css|svg|png|ico|jpg|jpeg|webp|woff2?|ttf))', str(path))
        if str(path) not in exact and not web:
            raise ValueError('unexpected application runtime file')
    elif path.parts[0] not in SYSTEM_ROOTS or path.parts[0] in {'tmp', 'root', 'home', 'data'}:
        raise ValueError('unexpected runtime file root')


def audit_proxy(stream):
    with zipfile.ZipFile(stream) as jar:
        for entry in jar.infolist():
            path = safe_name(entry.filename)
            if set(path.parts) & FORBIDDEN_PARTS or path.name.endswith(SOURCE_SUFFIXES) or path.name.endswith(('.key', '.p12', '.pfx')):
                raise ValueError('unexpected source or credential in runtime JAR')
            if path.name.startswith('.env'):
                raise ValueError('credential file in runtime JAR')


def audit_config(config, arch, revision):
    runtime = config.get('config', {})
    if config.get('os') != 'linux' or config.get('architecture') != arch:
        raise ValueError('wrong runtime architecture')
    if runtime.get('User') != '10001:10001' or runtime.get('Entrypoint') != ['/app/mediflow']:
        raise ValueError('runtime user or entrypoint changed')
    if set(runtime.get('ExposedPorts', {})) != {'9999/tcp', '9090/tcp'}:
        raise ValueError('runtime ports changed')
    env = dict(item.split('=', 1) for item in runtime.get('Env', []))
    if env.get('MEDIFLOW_LISTEN') != ':9999':
        raise ValueError('default HTTP listener changed')
    for key in env:
        if any(word in key.upper() for word in ('TOKEN', 'PASSWORD', 'SECRET', 'CREDENTIAL')):
            raise ValueError('credential environment in image configuration')
    if runtime.get('Labels', {}).get('org.opencontainers.image.revision') != revision:
        raise ValueError('runtime revision mismatch')


def audit(path, arch, revision):
    if arch not in ('amd64', 'arm64') or not re.fullmatch('[0-9a-f]{40}', revision):
        raise ValueError('expected immutable source and native architecture')
    with tarfile.open(path, 'r:*') as saved:
        manifest = json.load(saved.extractfile('manifest.json'))
        if len(manifest) != 1:
            raise ValueError('exactly one final image required')
        entry = manifest[0]
        config_bytes = saved.extractfile(str(safe_name(entry['Config']))).read()
        audit_config(json.loads(config_bytes), arch, revision)
        for layer in entry['Layers']:
            with tarfile.open(fileobj=saved.extractfile(str(safe_name(layer))), mode='r|*') as contents:
                for member in contents:
                    audit_member(member)
                    if member.isfile() and member.name.removeprefix('./') == 'app/java-proxy/mediflow-java-proxy.jar':
                        audit_proxy(io.BytesIO(contents.extractfile(member).read()))
                    if member.isfile() and member.name.endswith('.pem'):
                        if b'PRIVATE KEY' in contents.extractfile(member).read():
                            raise ValueError('private key in certificate file')
    return 'sha256:' + hashlib.sha256(config_bytes).hexdigest()


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('archive'); parser.add_argument('--arch', required=True); parser.add_argument('--revision', required=True)
    args = parser.parse_args()
    try:
        print(audit(args.archive, args.arch, args.revision))
    except Exception:
        raise SystemExit('Runtime image failed public-artifact audit; no source paths or diagnostics are published.') from None
