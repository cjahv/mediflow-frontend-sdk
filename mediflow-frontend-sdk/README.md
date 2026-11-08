# Mediflow 屏幕 SDK（TypeScript）

无人值守屏幕通过 SDK 获取并持续同步当前屏幕的队列状态；历史查询不参与屏幕显示或播报。屏幕展示端通过 SDK 连接平台。WebSocket 全部使用 **Protobuf binary frame**，不支持 JSON 文本或 JSON fallback。SDK 内部处理连接地址、鉴权、编解码和重连，应用不需要创建 WebSocket、拼消息或发送 auth。

## 安装与启动

```sh
npm ci
npm run build
npm test
# 在业务项目中使用本地包
npm install ../mediflow-frontend-sdk
```

```ts
import { ScreenClient } from '@cjahv/mediflow-screen-sdk';

const screen = new ScreenClient({
  baseURL: 'https://hospital.example/mediflow',
  token: screenToken,
  onSnapshot: snapshot => render(snapshot.data),
  playback: {
    play: text => playAudio(text), // 声音结束才 resolve；SDK负责排队、消费和日志
    onState: state => showPlaybackStatus(state),
    onConsumption: result => showConsumption(result),
  },
  onStatus: status => showConnectionStatus(status),
  onError: error => reportError(error.message),
});
await screen.start(); // 连接、自动鉴权，收到首个有效快照后完成
```

`baseURL` 接受 HTTP(S) 源站或 `/mediflow` 地址。SDK 自动使用 WS(S)，token 只在首个 Protobuf 二进制鉴权帧发送，不进入 URL。浏览器跨域屏幕直接使用首帧 token 认证，无需配置来源列表；管理员诊断连接仍严格限制来源和会话。生产使用 HTTPS/WSS；不要把 token 写入日志、公开源码或公开站点。

## 自动消费与播放

配置 `playback.play` 后，SDK自动获取独立待消费列表、去重排队、串行消费，并且仅使用消费成功结果中的文本播放。结果不确定时暂停后续消费并保留原ID，SDK在线时自动退避重试，重连后也会恢复，不需要屏幕现场点击。消费重试默认从1秒起、最高30秒，带随机抖动，可用 `playback.retryMs/retryMaxMs` 配置。待消费同步超时也会自动退避重试，使用 `reconnectMs/reconnectMaxMs` 的间隔配置。`retryConsumption()` 仅用于提前重试。音频失败会暂停，人工检查设备后调用 `resumePlayback()`，不会重新播放已失败的那次音频。日志失败可 `retryPlaybackReports()`，重连也会补报，不触发声音。

`playbackState`/`playback.onState` 返回 `idle/playing/offline/uncertain/paused/closed`、排队数量、失败日志数量和未决消费信息。队列与日志有界且仅保存在实例内存，重启后的音频状态无法证明；允许故障漏播，不承诺恰好一次。

## 手动消费（高级接口）

以下仅供需要独立控制某次消费的业务使用，不要与自动播放模式同时驱动同屏叫号：

```ts
const operation = screen.createConsumption(callId); // SDK 生成并固定 requestId
// 如需跨页面/进程重启恢复，在首次执行前保存 operation.callId、operation.requestId。
const result = await operation.play(async text => {
  await playAudio(text);
});
```

`play()` 仅在成功获得额度后调用播放器，并自动发送 started/completed/failed 日志。若只需消费结果，使用 `operation.execute()`。播放失败不退款、不自动补播。

超时或断线表示消费结果可能不确定。重试**同一个 operation**；恢复应用时调用 `screen.createConsumption(savedCallId, savedRequestId)`。不能为重试创建新 ID。同一 ScreenClient 内，同一 ID 的播放器最多调用一次；进程重启后的播放去重需由应用持久化记录，不能保证恰好一次播放。

## 公共接口

| 接口 | 行为 |
| --- | --- |
| `start(timeoutMs?)` | 连接并等待有效快照；超时拒绝 Promise，后台重连仍继续，取消用 close() |
| `connect()` | 非阻塞连接；通过 onStatus 观察状态 |
| `isConnected` / `snapshot` | 当前是否已认证、最后快照的独立副本 |
| `createConsumption(callId, requestId?)` | 返回只读消费操作，SDK默认生成 ID；execute()/play() 重用同一 ID |
| `consume(callId, requestId)` | 需要自行管理幂等 ID 时使用的底层业务方法 |
| `consumeAndPlay(callId, requestId, player)` | 使用指定幂等 ID 消费并播放 |
| `reportPlayback(callId, requestId, status, error?, eventId?)` | Promise 等待该事件审计落库；默认 eventId=requestId:status，重试复用 |
| `refreshPendingCalls()` | 重新扫描当前可消费叫号，不改变历史页；SDK就绪、重连和叫号更新后自动扫描 |
| `sync(page=1, pageSize=20)` | 请求快照和指定历史页；每页1..100条 |
| `playbackState` | SDK自动播放队列状态与未决消费 |
| `retryConsumption()` | 在线时重试SDK保留的未决消费，原ID不变 |
| `resumePlayback()` | 设备检查后继续剩余任务，不重播失败音频 |
| `retryPlaybackReports()` | 重试SDK保留的日志，不播放音频 |
| `close()` | 停止连接与重连，拒绝未完成消费及 start() |

`onPlaybackResult({eventId, requestId, callId, status, ok:true})` 对应某次播放日志的落库确认。`reportPlayback()` 返回 Promise；超时、断线或服务端拒绝会 reject。相同 eventId 和相同内容重试不会重复审计；同 ID 不同内容会拒绝。`play()` 不等待日志网络往返来阻塞音频，上报失败交给 onError，应用可用相同 eventId 补报，绝不自动重播音频。

`onCalls(calls, pageInfo)` 仅用于历史浏览。自动播放使用独立待消费游标，不受历史页码影响。`onPendingCalls` 可作为观察回调，不代表取得额度；启用 playback 后不要在这个回调里再次消费。同步与异步回调异常由SDK隔离，交给 onError，不中断协议状态。

无人值守入口只使用 `onSnapshot` 和 `playback`，不需要订阅或翻阅历史。保留的高级历史订阅页码在重连后恢复；待消费扫描从头重新开始，以恢复断线期间积压。镜像整体替换显示，不推导队列业务。未知模板版本报告错误，旧版本快照被忽略，新连接首个快照或新 epoch 为准。

认证被拒绝（WS1008）进入 rejected 状态并停止自动重连；临时服务故障（1013）保持重连；修复 token 后重新创建客户端。普通断线采用指数退避与随机抖动（默认1.5秒起、30秒上限），重新连接并自动鉴权，期间消费操作失败，需要等在线后以相同 ID 重试。自动播放会以原ID恢复未决消费与日志；手动消费仍由调用方保存operation决定重试。

## 类型与协议

业务模型在 `src/types.ts`，协议契约以仓库 protocol/ 中的 v4 schema 和生成代码为准。SDK 对消费结果、屏幕身份、额度和内容再做运行时校验。代码中的对象是 SDK 内部模型，编码后才上网；不代表 JSON 协议。业务只使用 ScreenClient，无需手写消息。

整数限制 ±(2^53−1)。包元数据、离线配置及测试日志可使用 JSON，与网络协议无关。

## 验证

Node.js 22.6+，推荐 Node.js 24。`npm test` 包含二进制鉴权、就绪等待、生成 ID 重试、分页、错误和编解码边界测试。`test/live.mjs` 对真实测试平台验证两个屏幕、并发扣减、自动鉴权和播放确认。脚本会创建合成数据，勿指向生产。完整接入、状态和异常处理示例见 [`examples/screen.ts`](examples/screen.ts) 与 [运行说明](examples/README.md)，功能矩阵见 `docs/ACCEPTANCE.md`。

### 平台只读预览

管理平台直接使用同一个 `ScreenClient`，配置 `mode: "preview"` 和 `onSnapshot`。
SDK 自动连接 `/mediflow/ws/diagnostic`、鉴权和重连。该入口要求有效的同源管理员会话，
屏幕 Token 仍由 SDK 通过二进制鉴权帧发送，不出现在 URL。
预览连接不会计入物理屏幕在线状态，也不能消费额度或上报播放；`playback` 配置会被拒绝。
真实无人值守屏幕使用默认 `mode: "screen"`，与示例保持一致。

## 公开预发布包安装（准备中）

发布准备版本为 `0.7.0-rc.1`，配置不代表该版本已经发布。发布成功后，任何人均可匿名安装固定版本，无需 GitHub/npm 账号或 token：

```sh
npm install git+https://github.com/cjahv/mediflow-frontend-sdk.git#v0.7.0-rc.1
```

包包含构建后的 JavaScript、类型声明和协议定义，消费项目不需要 protoc，源码仓库保持私有。发布后使用根目录 `node scripts/release/check-npm-consumer.mjs <版本>` 从独立目录、空配置和空缓存匿名检验下载与导入。

Git URL 安装不依赖 npm scope 所有权。跨仓库发布凭据和审批配置见 [发布检查](../scripts/release/README.md)，消费方不需要这些配置。

发行 Git 仓仅包含预编译产物，无安装构建脚本；无需 npmjs 账号。固定 tag 并提交 lockfile，以锁定实际 Git commit。版本尚未发布时安装命令不能作为发布成功证明。

## Protocol v4 upgrade (unreleased)

Upgrade the platform, Java SDK 0.9.0-rc.1 and frontend SDK 0.7.0-rc.1 together. v3 clients are rejected; there is no JSON or v3 fallback. Existing stored IDs, tokens, request IDs and database schema remain unchanged. Regenerate direct Protobuf consumers: ID/token fields are now `bytes`, and the service namespace is `mediflow.v4`. Java generated setters require `Identifiers.encode(text)` and getters use `Identifiers.decode(bytes)`; high-level string APIs remain strings. Frontend SDK public models remain strings.

Each ID/token byte field begins with a one-byte discriminator: 0 means the exact UTF-8 text; 1 means 16 UUID bytes (canonical lowercase hyphenated text); 2 means 24 random bytes (canonical lowercase 48-character hexadecimal text). Noncanonical encodings, malformed UTF-8, invalid fixed lengths and text exceeding 4096 UTF-8 bytes are rejected. Mixed case, leading zeros, Unicode and external business identifiers retain their original spelling. Arbitrary text costs one extra byte; canonical UUIDs save 19 bytes and platform random IDs/tokens save 23 bytes per field. No entropy is removed. Empty text is encoded as tag 0 only; absent optional fields remain absent.

Every gRPC call uses binary metadata `mediflow-token-bin`; legacy Bearer metadata is rejected. HTTP/2 base64-encodes binary metadata and HPACK may compress repeated headers, so raw token savings are not a claim about total per-RPC network bytes. Management HTTP and WebSocket packets use protocolVersion 4; WebSocket frames remain binary Protobuf. Message size measurements exclude transport headers, TLS and compression.
