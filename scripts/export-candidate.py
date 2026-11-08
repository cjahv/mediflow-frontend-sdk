#!/usr/bin/env python3
"""Only final runtime bytes and minimal immutable metadata may cross release jobs."""
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import io
import tarfile
import gzip

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('image_audit',ROOT/'scripts/audit-image.py');audit=importlib.util.module_from_spec(spec);spec.loader.exec_module(audit)
def main():
    policy=json.loads((ROOT/'release/platform-source.json').read_text())
    arch=os.environ['ARCH']
    target=Path(os.environ['RUNNER_TEMP'])/'public-candidate';target.mkdir()
    archive=target/'image.tar'
    subprocess.run(['docker','save','-o',str(archive),'mediflow:ci'],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
    config_id=audit.audit(archive,arch,policy['commit'])
    # Docker save can include auxiliary OCI metadata or unreferenced blobs. Only
    # the already-audited final config and referenced layers cross the boundary.
    normalized=target/'normalized.tar'
    with tarfile.open(archive,'r:*') as original, tarfile.open(normalized,'w') as clean:
        manifest=json.load(original.extractfile('manifest.json'))
        entry=manifest[0]
        entry['RepoTags']=['mediflow:ci']
        raw=json.dumps(manifest,separators=(',',':')).encode()
        info=tarfile.TarInfo('manifest.json');info.size=len(raw);clean.addfile(info,io.BytesIO(raw))
        for name in dict.fromkeys([entry['Config'],*entry['Layers']]):
            info=original.getmember(name)
            if not info.isfile():raise ValueError('non-file image payload')
            clean.addfile(info,original.extractfile(info))
    normalized.replace(archive)
    if audit.audit(archive,arch,policy['commit'])!=config_id:raise ValueError('normalized image changed')
    with archive.open('rb') as source: checksum=hashlib.file_digest(source,'sha256').hexdigest()
    expanded_archive=0
    with tarfile.open(archive,'r:*') as saved:
        entry=json.load(saved.extractfile('manifest.json'))[0]
        for name in entry['Layers']:
            stream=saved.extractfile(name);magic=stream.read(2);stream.seek(0)
            reader=gzip.GzipFile(fileobj=stream) if magic==b'\x1f\x8b' else stream
            while chunk:=reader.read(1024*1024):expanded_archive+=len(chunk)
    expanded=int(subprocess.check_output(['docker','image','inspect','mediflow:ci','--format','{{.Size}}'],text=True).strip())
    (target/'candidate.json').write_text(json.dumps({'platformCommit':policy['commit'],'sdkCommit':os.environ['GITHUB_SHA'],'arch':arch,'configId':config_id,'archiveSHA256':checksum,'version':os.environ['IMAGE_TAG'],'expandedLayerBytes':expanded,'expandedLayerArchiveBytes':expanded_archive})+'\n')
    with open(os.environ['GITHUB_STEP_SUMMARY'],'a') as summary:
        summary.write(f'Native {arch} expanded layer archives: {expanded_archive} bytes ({expanded_archive / 1048576:.2f} MiB); Docker-reported size: {expanded} bytes.\n')
    if set(p.name for p in target.iterdir())!={'image.tar','candidate.json'}:raise ValueError('unexpected exported file')
if __name__=='__main__':
    try:main()
    except Exception:raise SystemExit('Final image audit/export failed. No source diagnostics are published.') from None
