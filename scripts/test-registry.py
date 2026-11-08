import importlib.util
import io
import json
from pathlib import Path
import unittest
from unittest.mock import patch
from urllib.error import HTTPError
spec=importlib.util.spec_from_file_location('registry',Path(__file__).with_name('registry.py'))
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
SHA='1'*40
class Registry(unittest.TestCase):
 def head(self,sha=SHA):return io.BytesIO(json.dumps({'sha':sha}).encode())
 def test_stale_public_workflow_cannot_publish(self):
  with patch.dict(m.os.environ,{'GITHUB_SHA':SHA}),patch.object(m.urllib.request,'urlopen',return_value=self.head('2'*40)),patch.object(m,'manifest') as request:
   with self.assertRaises(ValueError):m.check_destination('latest')
   request.assert_not_called()
 def test_current_latest_requires_anonymous_existing_destination(self):
  with patch.dict(m.os.environ,{'GITHUB_SHA':SHA}),patch.object(m.urllib.request,'urlopen',return_value=self.head()),patch.object(m,'manifest',return_value=('digest',{})) as request:
   m.check_destination('latest');request.assert_called_once_with('latest')
 def test_existing_rc_never_overwritten(self):
  with patch.dict(m.os.environ,{'GITHUB_SHA':SHA}),patch.object(m.urllib.request,'urlopen',return_value=self.head()),patch.object(m,'manifest',return_value=('digest',{})):
   with self.assertRaises(ValueError):m.check_destination('0.2.0-rc.1')
 def test_only_rc_404_allows_creation(self):
  for status in (401,403,404,429,500):
   with patch.dict(m.os.environ,{'GITHUB_SHA':SHA}),patch.object(m.urllib.request,'urlopen',return_value=self.head()),patch.object(m,'manifest',side_effect=[('digest',{}),HTTPError('https://ghcr.io',status,'fixture',{},None)]):
    if status==404:m.check_destination('0.2.0-rc.1')
    else:
     with self.assertRaises(HTTPError):m.check_destination('0.2.0-rc.1')
 def test_index_must_match_both_tested_native_digests(self):
  expected={'amd64':'sha256:'+'a'*64,'arm64':'sha256:'+'b'*64}
  children=[{'digest':digest,'platform':{'os':'linux','architecture':arch}} for arch,digest in expected.items()]
  with patch.object(m,'manifest',return_value=('index',{'manifests':children})):self.assertEqual(m.check_index('latest',expected),'index')
  for broken in (children[:1],children+[children[0]],[children[0],children[0]]):
   with patch.object(m,'manifest',return_value=('index',{'manifests':broken})):
    with self.assertRaises(ValueError):m.check_index('latest',expected)
 def test_invalid_reference_never_reaches_registry(self):
  for ref in ('../../other','main','latest\n','sha256:abc'):
   with patch.object(m.urllib.request,'urlopen') as request:
    with self.assertRaises(ValueError):m.manifest(ref)
    request.assert_not_called()
if __name__=='__main__':unittest.main()
