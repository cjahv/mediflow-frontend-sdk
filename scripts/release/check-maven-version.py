#!/usr/bin/env python3
import re
from pathlib import Path
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[2]
ns='{http://maven.apache.org/POM/4.0.0}'
pom=ET.parse(root/'mediflow-backend-sdk/pom.xml').getroot()
version=pom.find(ns+'version').text
assert pom.find(ns+'groupId').text=='io.github.cjahv.mediflow'
assert pom.find(ns+'artifactId').text=='mediflow-backend-sdk'
assert re.fullmatch(r'\d+\.\d+\.\d+-rc\.\d+',version)
url='https://repo.maven.apache.org/maven2/io/github/cjahv/mediflow/mediflow-backend-sdk/'+version+'/mediflow-backend-sdk-'+version+'.pom'
try:
    with urllib.request.urlopen(url,timeout=30):pass
except urllib.error.HTTPError as error:
    if error.code!=404:raise
else:raise SystemExit('Existing Maven version must never be overwritten.')
