#!/usr/bin/env python3
import importlib.util
import io
import json
from pathlib import Path
import tarfile
import tempfile
import unittest
import zipfile
spec=importlib.util.spec_from_file_location('audit',Path(__file__).with_name('audit-image.py'));audit=importlib.util.module_from_spec(spec);spec.loader.exec_module(audit)
SHA='1'*40
class Audit(unittest.TestCase):
 def test_private_source_keys_and_data_rejected(self):
  for path in ['app/main.go','app/web/dist/index.js.map','app/private.txt','root/.npmrc','tmp/build.log','data/store.sqlite','etc/client.key','../secret','/absolute','usr/src/Main.java','app/.git/config']:
   with self.subTest(path=path),self.assertRaises(ValueError):audit.audit_member(tarfile.TarInfo(path))
 def test_known_runtime_files_allowed(self):
  for path in ['app/mediflow','app/web/dist/assets/index-123.js','app/java-proxy/mediflow-java-proxy.jar','usr/lib/jvm/java-17-openjdk/lib/modules','etc/ssl/certs/ca-certificates.crt']:
   audit.audit_member(tarfile.TarInfo(path))
 def test_jar_cannot_hide_sources(self):
  for path in ['example/Main.java','.git/config','credentials.key']:
   stream=io.BytesIO()
   with zipfile.ZipFile(stream,'w') as z:z.writestr(path,'private')
   stream.seek(0)
   with self.assertRaises(ValueError):audit.audit_proxy(stream)
 def config(self):
  return {'architecture':'amd64','os':'linux','config':{'User':'10001:10001','Entrypoint':['/app/mediflow'],'ExposedPorts':{'9999/tcp':{},'9090/tcp':{}},'Env':['MEDIFLOW_LISTEN=:9999'],'Labels':{'org.opencontainers.image.revision':SHA}}}
 def test_arch_revision_nonroot_ports_and_credentials(self):
  audit.audit_config(self.config(),'amd64',SHA)
  for key,value in [('User','root'),('Env',['MEDIFLOW_LISTEN=:9999','GH_TOKEN=secret']),('ExposedPorts',{'8080/tcp':{}})]:
   config=self.config();config['config'][key]=value
   with self.assertRaises(ValueError):audit.audit_config(config,'amd64',SHA)
  with self.assertRaises(ValueError):audit.audit_config(self.config(),'arm64',SHA)
  with self.assertRaises(ValueError):audit.audit_config(self.config(),'amd64','2'*40)
 def test_deleted_secret_in_earlier_layer_still_rejected(self):
  def tar_bytes(files):
   b=io.BytesIO()
   with tarfile.open(fileobj=b,mode='w') as tar:
    for name,data in files.items():
     info=tarfile.TarInfo(name);info.size=len(data);tar.addfile(info,io.BytesIO(data))
   return b.getvalue()
  layers={'a/layer.tar':tar_bytes({'app/secret.key':b'private'}),'b/layer.tar':tar_bytes({'app/.wh.secret.key':b''})}
  files={'manifest.json':json.dumps([{'Config':'config.json','Layers':list(layers)}]).encode(),'config.json':json.dumps(self.config()).encode(),**layers}
  with tempfile.NamedTemporaryFile() as f:
   f.write(tar_bytes(files));f.flush()
   with self.assertRaises(ValueError):audit.audit(f.name,'amd64',SHA)
if __name__=='__main__':unittest.main()
