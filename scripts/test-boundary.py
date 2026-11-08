#!/usr/bin/env python3
import copy
import importlib.util
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
def load(name):
 spec=importlib.util.spec_from_file_location(name, ROOT/'scripts'/f'{name}.py')
 module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
boundary=load('check-boundary');source=load('private-source')
SHA='1'*40
class Boundary(unittest.TestCase):
 def test_platform_and_path_traversal_never_enter_sdk_inventory(self):
  for path in ['mediflow-platform/main.go','../secret','/tmp/secret','mediflow-frontend-sdk/.env']:
   with self.assertRaises(ValueError):boundary.allowed_paths({'files':{path:'x'}})
 def test_reviewed_source_policy_starts_disabled(self):
  policy=json.loads((ROOT/'release/platform-source.json').read_text())
  self.assertFalse(policy['enabled']);self.assertIsNone(policy['commit'])
 def context(self):
  return dict(GITHUB_REPOSITORY=source.PUBLIC,GITHUB_EVENT_NAME='workflow_dispatch',GITHUB_REF='refs/heads/main',GITHUB_WORKFLOW_REF=source.PUBLIC+'/.github/workflows/verify-private-source.yml@refs/heads/main')
 def policy(self):
  return dict(enabled=True,repository=source.PRIVATE,commit=SHA,image='ghcr.io/cjahv/mediflow',platforms=['linux/amd64','linux/arm64'])
 def test_only_trusted_main_manual_dispatch_can_access_private_source(self):
  self.assertEqual(source.validate(self.policy(),self.context()),SHA)
  for key,value in [('GITHUB_EVENT_NAME','pull_request'),('GITHUB_EVENT_NAME','pull_request_target'),('GITHUB_EVENT_NAME','workflow_run'),('GITHUB_REF','refs/heads/feature'),('GITHUB_REPOSITORY','attacker/repo'),('GITHUB_WORKFLOW_REF','other')]:
   context=self.context();context[key]=value
   with self.assertRaises(ValueError):source.validate(self.policy(),context)
 def test_mutable_source_wrong_repo_and_unreviewed_destination_rejected(self):
  for key,value in [('enabled',False),('commit','main'),('commit','v1.0'),('commit',None),('repository','other/repo'),('image','ghcr.io/other/image'),('platforms',['linux/amd64'])]:
   policy=self.policy();policy[key]=value
   with self.assertRaises(ValueError):source.validate(policy,self.context())
 def test_private_main_ancestry_and_exact_sha_required(self):
  repo={'private':True,'full_name':source.PRIVATE};compare={'base_commit':{'sha':SHA},'merge_base_commit':{'sha':SHA}}
  self.assertTrue(source.trusted_identity(repo,compare,SHA))
  for broken in [{'private':False,'full_name':source.PRIVATE},{'private':True,'full_name':'other/repo'}]:self.assertFalse(source.trusted_identity(broken,compare,SHA))
  compare['merge_base_commit']['sha']='2'*40;self.assertFalse(source.trusted_identity(repo,compare,SHA))
 def test_missing_extra_and_symlink_paths_rejected(self):
  import tempfile
  with tempfile.TemporaryDirectory() as d:
   root=Path(d)
   for name in boundary.CONTROL:
    path=root/name;path.parent.mkdir(parents=True,exist_ok=True);path.write_text('fixture')
   (root/'README.md').unlink();(root/'README.md').symlink_to('/etc/passwd')
   with self.assertRaises(ValueError):boundary.check_tree(root,['README.md','secret'],{'files':{}})
   with self.assertRaises(ValueError):boundary.check_tree(root,list(boundary.CONTROL),{'files':{}})
if __name__=='__main__':unittest.main()
