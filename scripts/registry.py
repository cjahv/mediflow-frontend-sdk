#!/usr/bin/env python3
"""Anonymous registry verification; never use GitHub/private-source credentials."""
import argparse
import hashlib
import json
import re
import os
import urllib.request
import urllib.error

IMAGE = 'ghcr.io/cjahv/mediflow'
ACCEPT = 'application/vnd.oci.image.index.v1+json, application/vnd.docker.distribution.manifest.list.v2+json, application/vnd.oci.image.manifest.v1+json, application/vnd.docker.distribution.manifest.v2+json'


def manifest(reference):
    if not re.fullmatch(r'(latest|\d+\.\d+\.\d+-rc\.\d+|candidate-[0-9-]+-(?:amd64|arm64)|sha256:[0-9a-f]{64})', reference):
        raise ValueError('invalid immutable reference or release tag')
    with urllib.request.urlopen('https://ghcr.io/token?service=ghcr.io&scope=repository:cjahv/mediflow:pull', timeout=30) as response:
        token = json.load(response)['token']
    req = urllib.request.Request('https://ghcr.io/v2/cjahv/mediflow/manifests/' + reference,
                                 headers={'Authorization': 'Bearer ' + token, 'Accept': ACCEPT})
    with urllib.request.urlopen(req, timeout=30) as response:
        raw = response.read(); digest = 'sha256:' + hashlib.sha256(raw).hexdigest()
        if response.headers.get('Docker-Content-Digest') != digest: raise ValueError('registry digest mismatch')
        return digest, json.loads(raw)


def check_destination(tag):
    expected = os.environ.get('GITHUB_SHA', '')
    if not re.fullmatch('[0-9a-f]{40}', expected): raise ValueError('exact public release commit required')
    with urllib.request.urlopen('https://api.github.com/repos/cjahv/mediflow-frontend-sdk/commits/main', timeout=30) as response:
        if json.load(response)['sha'] != expected: raise ValueError('stale public release run')
    manifest('latest')  # Existing destination must remain anonymously readable.
    if tag != 'latest':
        try: manifest(tag)
        except urllib.error.HTTPError as error:
            if error.code != 404: raise
        else: raise ValueError('immutable RC tag already exists')


def check_index(tag, expected):
    digest, index = manifest(tag)
    children = index.get('manifests', [])
    actual = {(x.get('platform', {}).get('os'), x.get('platform', {}).get('architecture')): x['digest'] for x in children}
    if len(children) != 2 or actual != {('linux', arch): value for arch, value in expected.items()}:
        raise ValueError('multiarch index does not contain exactly the tested native digests')
    return digest


if __name__ == '__main__':
    p=argparse.ArgumentParser();p.add_argument('mode',choices=['destination','digest','index','size']);p.add_argument('reference');p.add_argument('--amd64');p.add_argument('--arm64');a=p.parse_args()
    if a.mode=='destination': check_destination(a.reference)
    elif a.mode=='digest': print(manifest(a.reference)[0])
    elif a.mode=='size':
        digest, data = manifest(a.reference)
        if 'layers' not in data: raise ValueError('per-architecture image digest required')
        print(json.dumps({'digest':digest,'compressedLayerBytes':sum(x['size'] for x in data['layers']),'configBytes':data['config']['size']}))
    else: print(check_index(a.reference,{'amd64':a.amd64,'arm64':a.arm64}))
