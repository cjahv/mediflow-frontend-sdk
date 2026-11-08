#!/usr/bin/env python3
import importlib.util
import json
import os
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('private_source',ROOT/'scripts/private-source.py');source=importlib.util.module_from_spec(spec);spec.loader.exec_module(source)
if __name__=='__main__':
    policy=json.loads((ROOT/'release/platform-source.json').read_text());sha=source.validate(policy,os.environ)
    tag=os.environ['IMAGE_TAG']
    if not re.fullmatch(r'latest|\d+\.\d+\.\d+-rc\.\d+',tag):raise SystemExit('Invalid release tag')
    with open(os.environ['GITHUB_OUTPUT'],'a') as f:f.write('commit='+sha+'\n')
