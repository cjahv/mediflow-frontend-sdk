import assert from 'node:assert/strict';
import { encode, decode } from '../mediflow-frontend-sdk/src/protobuf.ts';
let cookie='';
async function request(path, body, expectedStatus = 200) {
 const response=await fetch(`http://127.0.0.1:18082/mediflow/api/admin${path}`, {method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/x-protobuf',Cookie:cookie},body:body===undefined?undefined:encode(body)});
 const payload=decode(await response.arrayBuffer());
 assert.equal(response.status,expectedStatus, `${path}: ${response.status} ${payload?.error ?? ''}`);
 if(response.headers.get('set-cookie'))cookie=response.headers.get('set-cookie').split(';')[0];
 return payload;
}
await request('/login',{username:'ci',password:'ci-container-only'});
if(process.argv[2]==='create') {
 await request('/screens',{id:'persistent-screen',name:'Persistent screen'},201);
 const published = await request('/screens/persistent-screen/snapshot', {requestId:'container-publish',data:{queues:[{id:'q',name:'Container queue',sections:[{id:'waiting',name:'Waiting',persons:[{id:'p',name:'Synthetic person',displayNumber:'C001',order:1}]}]}]}});
 assert.equal(published.data.queues[0].id,'q');
 const call = await request('/screens/persistent-screen/calls',{id:'container-call',queueId:'q',personId:'p',text:'Container synthetic call',totalQuota:1});
 assert.equal(call.id,'container-call');
}
const result=await request('/screens/persistent-screen');
assert.equal(result.screen.name,'Persistent screen');
assert.equal(result.state.data.queues[0].id,'q');
assert.equal(result.calls.items[0].id,'container-call');
console.log('PASS: container persisted business record');
