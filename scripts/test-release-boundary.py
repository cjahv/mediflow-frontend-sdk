#!/usr/bin/env python3
"""Executable release capability and artifact boundary regression tests."""
import copy
import importlib.util
import os
from pathlib import Path
import unittest
from unittest.mock import patch
import yaml
ROOT = Path(__file__).resolve().parents[1]
def module(name):
    spec = importlib.util.spec_from_file_location(name, ROOT/'scripts'/f'{name}.py')
    result = importlib.util.module_from_spec(spec); spec.loader.exec_module(result); return result

def audit(flow):
    events = flow.get('on', flow.get(True))
    if set(events) != {'workflow_dispatch'}: raise ValueError('manual-only release')
    if flow['permissions'] != {'contents': 'read'}: raise ValueError('global privilege')
    if flow['concurrency']['cancel-in-progress'] is not False: raise ValueError('release cancellation')
    jobs = flow['jobs']
    if "github.ref == 'refs/heads/main'" not in jobs['preflight']['if']: raise ValueError('main guard')
    if set(jobs['candidate']['needs']) != {'source-quality', 'source-java21'}: raise ValueError('missing quality gate')
    if jobs['push-architecture']['needs'] != 'candidate' or jobs['push-architecture']['if'] != 'inputs.publish': raise ValueError('publish gate')
    if jobs['publish-index']['needs'] != 'push-architecture': raise ValueError('index gate')
    if jobs['verify-public']['needs'] != 'publish-index': raise ValueError('verification gate')
    for name, job in jobs.items():
        permissions = job.get('permissions', {})
        if permissions.get('packages') == 'write' and name not in {'push-architecture', 'publish-index'}: raise ValueError('excess package access')
        for step in job.get('steps', []):
            env = step.get('env', {})
            if 'PLATFORM_READ_TOKEN' in env:
                if job.get('environment') != 'platform-release' or step.get('run') != 'python3 scripts/private-source.py --checkout': raise ValueError('private credential scope')
            action = step.get('uses', '')
            if action.startswith('actions/checkout@') and step.get('with', {}).get('persist-credentials') is not False: raise ValueError('persisted credentials')
            if action.startswith('actions/upload-artifact@'):
                allowed = {
                    'candidate': '${{ runner.temp }}/public-candidate/image.tar\n${{ runner.temp }}/public-candidate/candidate.json',
                    'push-architecture': '${{ runner.temp }}/digest/${{ matrix.arch }}.txt\n${{ runner.temp }}/digest/${{ matrix.arch }}.json',
                }
                if step['with']['path'].strip() != allowed.get(name): raise ValueError('unreviewed upload')
            if action.startswith('aquasecurity/trivy-action@') and step['with']['cache'] is not False: raise ValueError('private cache')
    for name in ['candidate', 'verify-public']:
        matrix = jobs[name]['strategy']['matrix']['include']
        if {(x['arch'], x['runner'], x['machine']) for x in matrix} != {('amd64','ubuntu-24.04','x86_64'),('arm64','ubuntu-24.04-arm','aarch64')}: raise ValueError('native architecture coverage')
    if 'environment' in jobs['verify-public']: raise ValueError('anonymous verification credentials')

class ReleaseBoundary(unittest.TestCase):
    def setUp(self):
        self.flow = yaml.safe_load((ROOT/'.github/workflows/release-platform.yml').read_text())
    def test_reviewed_workflow(self): audit(self.flow)
    def test_pr_event_rejected(self):
        self.flow[True] = {'pull_request': {}}
        with self.assertRaises(ValueError): audit(self.flow)
    def test_missing_java_gate_rejected(self):
        self.flow['jobs']['candidate']['needs'] = ['source-quality']
        with self.assertRaises(ValueError): audit(self.flow)
    def test_workspace_upload_rejected(self):
        step = next(s for s in self.flow['jobs']['candidate']['steps'] if s.get('uses','').startswith('actions/upload-artifact@'))
        step['with']['path'] = '${{ runner.temp }}/**'
        with self.assertRaises(ValueError): audit(self.flow)
    def test_secret_moved_to_job_command_rejected(self):
        step = next(s for s in self.flow['jobs']['candidate']['steps'] if 'PLATFORM_READ_TOKEN' in s.get('env',{}))
        step['run'] = 'python3 scripts/run-private.py candidate'
        with self.assertRaises(ValueError): audit(self.flow)
    def test_wrong_environment_rejected(self):
        self.flow['jobs']['candidate']['environment'] = 'unprotected'
        with self.assertRaises(ValueError): audit(self.flow)
    def test_private_code_environment_has_no_tokens(self):
        runner = module('run-private')
        with patch.dict(os.environ, {'PLATFORM_READ_TOKEN':'hidden','GITHUB_TOKEN':'hidden','ACTIONS_RUNTIME_TOKEN':'hidden','SDK_GIT_TOKEN':'hidden','PATH':'/bin'}, clear=True):
            self.assertEqual(runner.sanitized_env(), {'PATH':'/bin'})
    def test_candidate_uses_reproducible_helper_and_keeps_smoke_gates(self):
        runner = module('run-private')
        import json
        policy = json.loads((ROOT/'release/platform-source.json').read_text())
        with patch.object(runner, 'materialize_sdks'), patch.object(runner, 'execute') as execute, patch.dict(os.environ, {'IMAGE_TAG': 'latest'}), patch('sys.argv', ['run-private.py', 'candidate']):
            runner.main()
        commands = [call.args[0] for call in execute.call_args_list]
        self.assertEqual(commands[0], ['bash', 'scripts/build-image.sh', 'mediflow:ci', 'latest', policy['commit']])
        self.assertIn(['bash', 'scripts/container-smoke.sh'], commands)
        self.assertIn(['bash', 'scripts/compose-release-smoke.sh'], commands)
        steps = self.flow['jobs']['candidate']['steps']
        self.assertTrue(any(step.get('uses') == 'docker/setup-buildx-action@8d2750c68a42422c14e847fe6c8ac0403b4cbd6f' for step in steps))
    def test_no_package_write_in_build(self):
        self.flow['jobs']['candidate']['permissions'] = {'packages':'write'}
        with self.assertRaises(ValueError): audit(self.flow)
    def test_no_emulated_architecture_substitution(self):
        self.flow['jobs']['candidate']['strategy']['matrix']['include'][1]['runner'] = 'ubuntu-24.04'
        with self.assertRaises(ValueError): audit(self.flow)
if __name__ == '__main__': unittest.main()
