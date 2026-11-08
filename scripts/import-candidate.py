#!/usr/bin/env python3
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import subprocess
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('image_audit',ROOT/'scripts/audit-image.py');audit=importlib.util.module_from_spec(spec);spec.loader.exec_module(audit)
def main():
    target=Path(os.environ['RUNNER_TEMP'])/'public-candidate'
    if set(p.name for p in target.iterdir())!={'image.tar','candidate.json'}:raise ValueError('unexpected candidate inventory')
    record=json.loads((target/'candidate.json').read_text());policy=json.loads((ROOT/'release/platform-source.json').read_text())
    if (record['arch']!=os.environ['ARCH'] or record['platformCommit']!=policy['commit'] or record['sdkCommit']!=os.environ['GITHUB_SHA'] or record['version']!=os.environ['IMAGE_TAG']):raise ValueError('candidate identity mismatch')
    with (target/'image.tar').open('rb') as f: checksum=hashlib.file_digest(f,'sha256').hexdigest()
    if checksum!=record['archiveSHA256']:raise ValueError('candidate bytes changed')
    if audit.audit(target/'image.tar',record['arch'],record['platformCommit'])!=record['configId']:raise ValueError('candidate config changed')
    subprocess.run(['docker','load','-i',str(target/'image.tar')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
    actual=subprocess.check_output(['docker','image','inspect','mediflow:ci','--format','{{.Id}}'],text=True).strip()
    if actual!=record['configId']:raise ValueError('loaded image changed')
if __name__=='__main__':
    try:main()
    except Exception:raise SystemExit('Tested image identity verification failed.') from None
