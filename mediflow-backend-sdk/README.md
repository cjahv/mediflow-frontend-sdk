# Mediflow Java gRPC SDK

Java 17+ / Maven。仅面向后台业务系统，负责发布完整屏幕状态和定义叫号；消费与播音由屏幕前端 SDK 完成。

## 安装

本 SDK 尚未发布至 Maven Central。在本目录运行 `mvn install`，或将构建产物发布到团队 Maven 仓库：

```xml
<dependency>
  <groupId>io.github.cjahv.mediflow</groupId>
  <artifactId>mediflow-backend-sdk</artifactId>
  <version>0.9.0-rc.1</version>
</dependency>
```

## 直接使用

```java
try (var client = new MediflowClient("grpcs://mediflow.example.com:9090", screenToken)) {
    var current = client.state();
    // template 由业务系统根据当前队列、分区、人员构建；不是增量 patch。
    var updated = client.publish(persistedRequestId, template);
    var call = client.createCall(new CallRequest(
        persistedCallId, "general", "person-1", "请 A001 到一号诊室", 2));
}
```

完整示例：[examples/ProducerExample.java](examples/ProducerExample.java)，纳入 Maven 编译。SDK 自动附加 `mediflow-token-bin: <compact token bytes>`，调用生成的 `mediflow.v4.BackendService`，不手写请求字节、不使用 HTTP POST 或 Packet 包装。

- `state()`：当前屏幕的完整快照。
- `publish(requestId, template)`：完整替换，包括空模板清屏。
- `createCall(call)`：创建或将同一不可变叫号附加到当前屏幕；各屏消费独立。
- `calls()` / `callsPage(page, pageSize)`：有界历史查询，不用于驱动播音。
- `close()`：释放 SDK 自有连接。实例线程安全，建议按屏幕长期复用，不要每次请求新建。

## 连接与安全

生产使用 `grpcs://host:port`，证书和主机名均校验，使用系统 CA。私有 CA 可配置：

```java
try (var client = MediflowClient.builder("grpcs://internal.example:9090", screenToken)
        .trustCertificates(Path.of("company-ca.pem"))
        .timeout(Duration.ofSeconds(10))
        .build()) {
    var state = client.state();
}
```

仅本机开发允许显式 `grpc://127.0.0.1:9090` 或 `grpc://[::1]:9090` 明文。拒绝其他明文地址、URL 中的账号/查询参数/HTTP 路径；不提供关闭 TLS 校验选项。反向代理必须支持 gRPC HTTP/2；gRPC 方法路径由 service 定义，不是 `/mediflow/api/...`。管理端和屏幕 WebSocket 地址不受此 SDK 地址影响。

每次 RPC 默认 15 秒 deadline，可配置至最多 10 分钟；包括等待连接和响应。请求最大 2 MiB、接收最大 16 MiB，叫号文本最多 16 KiB UTF-8。线程中断会取消 RPC 并保留中断标志。`close()` 最多等待 5 秒再强制关闭。

## 错误与幂等

`ApiException.code()` 返回标准 gRPC `Status.Code`，不用解析错误文案：

| 状态 | 处理 |
| --- | --- |
| UNAUTHENTICATED / PERMISSION_DENIED | 检查屏幕 Token 与权限，不重复盲试 |
| INVALID_ARGUMENT | 修正数据/字段/分页限制 |
| ALREADY_EXISTS | 同 ID 内容冲突，核对已提交的业务数据 |
| RESOURCE_EXHAUSTED | 检查请求大小和服务资源 |
| DEADLINE_EXCEEDED / UNAVAILABLE / CANCELLED / UNKNOWN / INTERNAL | 结果可能不确定，保留原 ID 和内容再查询/重试 |

SDK 不自动重试写操作。请求之前持久化 `requestId` / `callId`；重试必须使用同一 ID 和完全相同的数据，不能生成新 ID。`outcomeMayBeUnknown()` 仅表示需谨慎核实，不代表保证能够安全无限重试。`ProtocolException` 表示服务返回的业务字段不符合契约，应停止该操作并检查版本或服务端。错误消息不回显服务端任意描述，避免泄露 Token 或人员数据。

## 构建与验收

```sh
mvn verify
mvn install
scripts/check-consumer.sh
```

协议从根目录 `protocol/mediflow.proto` 同步到 `proto/mediflow.proto`；Maven 生成 Java message 和 gRPC stub，无手写兼容 HTTP 客户端。

真实联调仅使用合成测试数据：

```sh
MEDIFLOW_GRPC_URL=grpc://127.0.0.1:9090 MEDIFLOW_SCREEN_TOKEN=... \
  mvn -Dmediflow.requireLive=true verify
```

环境缺失时普通单测明确跳过 live test；CI 设置 `requireLive` 强制运行，不允许用跳过冒充互通成功。SDK 不能自动解决服务配置、证书签发或浏览器播音权限。

## Maven Central 公开 RC（准备中）

候选坐标为 `io.github.cjahv.mediflow:mediflow-backend-sdk:0.9.0-rc.1`。尚未发布，也尚未确认 Central namespace 验证完成；验证 `io.github.cjahv` 后才可使用该坐标发布。Java 包名仍为 `com.cjahv.mediflow`，无需改变业务 import。

发布后 Maven 默认 Central 仓库即可匿名下载，无需 GitHub Token 或额外 repositories。JAR 包含生成后的 gRPC/Protobuf 类，不要求使用方安装 protoc。根目录 `scripts/release/check-maven-consumer.sh <版本>` 使用空 settings 和独立临时缓存下载并编译示例，不复用构建机安装的 SDK。

仅 `central-release` profile 启用 Javadoc、GPG 签名和 Central Portal 发布插件；普通 verify/install 不上传。现有 Maven 坐标与版本不变。发布迁移与所需维护者配置见 [发布边界](../release/MIGRATION.md)；当前草稿不启用 Central 或平台镜像发布。

## Protocol v4 upgrade (unreleased)

Upgrade the platform, Java SDK 0.9.0-rc.1 and frontend SDK 0.7.0-rc.1 together. v3 clients are rejected; there is no JSON or v3 fallback. Existing stored IDs, tokens, request IDs and database schema remain unchanged. Regenerate direct Protobuf consumers: ID/token fields are now `bytes`, and the service namespace is `mediflow.v4`. Java generated setters require `Identifiers.encode(text)` and getters use `Identifiers.decode(bytes)`; high-level string APIs remain strings. Frontend SDK public models remain strings.

Each ID/token byte field begins with a one-byte discriminator: 0 means the exact UTF-8 text; 1 means 16 UUID bytes (canonical lowercase hyphenated text); 2 means 24 random bytes (canonical lowercase 48-character hexadecimal text). Noncanonical encodings, malformed UTF-8, invalid fixed lengths and text exceeding 4096 UTF-8 bytes are rejected. Mixed case, leading zeros, Unicode and external business identifiers retain their original spelling. Arbitrary text costs one extra byte; canonical UUIDs save 19 bytes and platform random IDs/tokens save 23 bytes per field. No entropy is removed. Empty text is encoded as tag 0 only; absent optional fields remain absent.

Every gRPC call uses binary metadata `mediflow-token-bin`; legacy Bearer metadata is rejected. HTTP/2 base64-encodes binary metadata and HPACK may compress repeated headers, so raw token savings are not a claim about total per-RPC network bytes. Management HTTP and WebSocket packets use protocolVersion 4; WebSocket frames remain binary Protobuf. Message size measurements exclude transport headers, TLS and compression.
