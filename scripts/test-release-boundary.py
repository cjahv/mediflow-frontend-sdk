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
    def test_browser_diagnostic_only_returns_category_and_line(self):
        import tempfile
        runner = module('run-private')
        with tempfile.TemporaryDirectory() as directory, patch.object(runner, 'SOURCE', Path('/private/check-out')):
            log = Path(directory) / 'output.log'
            log.write_text('SECRET_EXCEPTION: patient payload and bearer token\n'
                           '    at file:///private/check-out/mediflow-platform/web/test/browser-live.mjs:188:17\n')
            self.assertEqual(runner.browser_failure_location(log), 'Browser check location: live:188')
            log.write_text('private URL https://secret.invalid/?token=hidden\n'
                           '    at verify (file:///private/check-out/mediflow-platform/web/test/browser-deployment.mjs:42:3)\n')
            self.assertEqual(runner.browser_failure_location(log), 'Browser check location: deployment:42')
    def test_browser_diagnostic_rejects_unknown_or_unbounded_locations(self):
        import tempfile
        runner = module('run-private')
        with tempfile.TemporaryDirectory() as directory, patch.object(runner, 'SOURCE', Path('/private/check-out')):
            log = Path(directory) / 'output.log'
            for value in [
                '    at file:///other/mediflow-platform/web/test/browser-live.mjs:12:3',
                '    at file:///private/check-out/mediflow-platform/web/test/secret.mjs:12:3',
                '    at file:///private/check-out/mediflow-platform/web/test/browser-live.mjs:123456:3',
                '    at file:///private/check-out/mediflow-platform/web/test/browser-live.mjs:0:3',
                '    at file:///private/check-out/mediflow-platform/web/test/browser-live.mjs:12:3 SECRET',
                '    at file:///private/check-out/mediflow-platform/web/test/browser-live.mjs:12:3\x1b[31m',
                'SECRET_EXCEPTION and private stack without reviewed location',
            ]:
                log.write_text(value + '\n')
                self.assertIsNone(runner.browser_failure_location(log))
            log.write_text('    at file:///private/check-out/mediflow-platform/web/test/browser-live.mjs:12:3\n' + 'x' * 131072)
            self.assertIsNone(runner.browser_failure_location(log))
            self.assertIsNone(runner.browser_failure_location(Path(directory) / 'missing'))
    def test_failed_browser_gate_still_raises_without_logging_private_output(self):
        import contextlib
        import io
        import tempfile
        from types import SimpleNamespace
        runner = module('run-private')
        with tempfile.TemporaryDirectory() as directory, patch.object(runner, 'TEMP', Path(directory)):
            def fail(command, **kwargs):
                kwargs['stderr'].write(b'SECRET_EXCEPTION bearer private-data\n')
                location = (runner.SOURCE / 'mediflow-platform/web/test/browser-live.mjs').as_uri()
                kwargs['stderr'].write(f'    at {location}:188:17\n'.encode())
                return SimpleNamespace(returncode=1)
            output = io.StringIO()
            with patch.object(runner.subprocess, 'run', side_effect=fail), contextlib.redirect_stdout(output):
                with self.assertRaises(RuntimeError):
                    runner.execute(['bash', str(runner.PUBLIC / 'scripts/quality-platform.sh')])
            self.assertEqual(output.getvalue(), 'Browser check location: live:188\n')

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
    def test_scanner_installation_is_pinned_without_weakening_scan(self):
        steps = self.flow['jobs']['candidate']['steps']
        install = next(s for s in steps if s.get('name') == 'Install checksum-pinned Trivy from official release')
        scan = next(s for s in steps if s.get('uses', '').startswith('aquasecurity/trivy-action@'))
        self.assertLess(steps.index(install), steps.index(scan))
        for required in ['sha256sum --check --strict', 'https://github.com/aquasecurity/trivy/releases/download/v0.70.0/', '8b4376d5d6befe5c24d503f10ff136d9e0c49f9127a4279fd110b727929a5aa9', '2f6bb988b553a1bbac6bdd1ce890f5e412439564e17522b88a4541b4f364fc8d', 'set -euo pipefail']:
            self.assertIn(required, install['run'])
        config = scan['with']
        self.assertTrue(config['skip-setup-trivy'])
        self.assertEqual(config['version'], 'v0.70.0')
        self.assertEqual(config['severity'], 'HIGH,CRITICAL')
        self.assertEqual(config['exit-code'], '1')
        self.assertFalse(config['ignore-unfixed'])
        self.assertFalse(config['cache'])
    def test_no_package_write_in_build(self):
        self.flow['jobs']['candidate']['permissions'] = {'packages':'write'}
        with self.assertRaises(ValueError): audit(self.flow)
    def test_no_emulated_architecture_substitution(self):
        self.flow['jobs']['candidate']['strategy']['matrix']['include'][1]['runner'] = 'ubuntu-24.04'
        with self.assertRaises(ValueError): audit(self.flow)
if __name__ == '__main__': unittest.main()
