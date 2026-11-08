#!/usr/bin/env python3
"""Only final runtime bytes and minimal immutable metadata may cross release jobs."""
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import subprocess

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('image_audit',ROOT/'scripts/audit-image.py');audit=importlib.util.module_from_spec(spec);spec.loader.exec_module(audit)
def main():
    policy=json.loads((ROOT/'release/platform-source.json').read_text())
    arch=os.environ['ARCH']
    target=Path(os.environ['RUNNER_TEMP'])/'public-candidate';target.mkdir()
    archive=target/'image.tar'
    subprocess.run(['docker','save','-o',str(archive),'mediflow:ci'],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
    config_id=audit.audit(archive,arch,policy['commit'])
    with archive.open('rb') as source: checksum=hashlib.file_digest(source,'sha256').hexdigest()
    (target/'candidate.json').write_text(json.dumps({'platformCommit':policy['commit'],'sdkCommit':os.environ['GITHUB_SHA'],'arch':arch,'configId':config_id,'archiveSHA256':checksum,'version':os.environ['IMAGE_TAG']})+'\n')
    if set(p.name for p in target.iterdir())!={'image.tar','candidate.json'}:raise ValueError('unexpected exported file')
if __name__=='__main__':
    try:main()
    except Exception:raise SystemExit('Final image audit/export failed. No source diagnostics are published.') from None
