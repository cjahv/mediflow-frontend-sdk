package com.cjahv.mediflow;

import com.cjahv.mediflow.proto.Mediflow;
import com.cjahv.mediflow.proto.BackendServiceGrpc;
import com.google.common.util.concurrent.ListenableFuture;
import com.google.protobuf.MessageLite;
import io.grpc.ManagedChannel;
import io.grpc.Metadata;
import io.grpc.Status;
import io.grpc.stub.MetadataUtils;
import io.grpc.netty.shaded.io.grpc.netty.NettyChannelBuilder;
import io.grpc.netty.shaded.io.grpc.netty.GrpcSslContexts;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.time.Duration;
import java.util.HashSet;
import java.util.Objects;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

/**
 * Thread-safe gRPC producer for one screen. Owns its channel; use try-with-resources.
 * Authentication, deadlines and generated Protobuf messages are automatic. Writes are never
 * automatically retried: after an uncertain result reuse the same ID and identical payload.
 */
public final class MediflowClient implements AutoCloseable {
    private static final int MAX_RESPONSE = 16 * 1024 * 1024;
    private static final int MAX_REQUEST = 2 * 1024 * 1024;
    private static final long MAX_SAFE_INTEGER = 9_007_199_254_740_991L;
    private final ManagedChannel channel;
    private final BackendServiceGrpc.BackendServiceFutureStub stub;
    private final Duration timeout;

    /** grpcs://host:9090 uses TLS. grpc:// is deliberately limited to loopback testing. */
    public MediflowClient(String endpoint, String screenToken) throws IOException {
        this(builder(endpoint, screenToken));
    }

    private MediflowClient(Builder builder) throws IOException {
        this(builder.createChannel(), builder.token, builder.timeout);
    }

    // Package-private injection for tests. The SDK owns and closes this channel too.
    MediflowClient(ManagedChannel channel, String token, Duration timeout) {
        validateToken(token); validateTimeout(timeout);
        this.channel = Objects.requireNonNull(channel, "channel");
        this.timeout = timeout;
        var headers = new Metadata();
        headers.put(Metadata.Key.of("authorization", Metadata.ASCII_STRING_MARSHALLER), "Bearer " + token);
        this.stub = BackendServiceGrpc.newFutureStub(channel)
                .withInterceptors(MetadataUtils.newAttachHeadersInterceptor(headers));
    }

    public static Builder builder(String endpoint, String screenToken) {
        return new Builder(endpoint, screenToken);
    }

    public static final class Builder {
        private final URI endpoint;
        private final String token;
        private Duration timeout = Duration.ofSeconds(15);
        private Path trustCertificates;
        private Builder(String value, String token) {
            URI uri;
            try { uri = URI.create(Objects.requireNonNull(value, "endpoint")); }
            catch (IllegalArgumentException error) { throw new IllegalArgumentException("Invalid gRPC endpoint"); }
            if (!("grpcs".equals(uri.getScheme()) || "grpc".equals(uri.getScheme()))
                    || uri.getHost() == null || uri.getPort() < 1 || uri.getPort() > 65535
                    || uri.getRawUserInfo() != null || uri.getRawQuery() != null || uri.getRawFragment() != null
                    || !uri.getRawPath().isEmpty()) {
                throw new IllegalArgumentException("Use grpcs://host:port (no HTTP path, credentials or query)");
            }
            if ("grpc".equals(uri.getScheme()) && !isLoopback(uri.getHost())) {
                throw new IllegalArgumentException("Plaintext gRPC is restricted to literal loopback endpoints");
            }
            validateToken(token);
            this.endpoint = uri; this.token = token;
        }
        public Builder timeout(Duration value) { validateTimeout(value); timeout = value; return this; }
        /** PEM CA certificates for a private PKI; hostname verification is never disabled. */
        public Builder trustCertificates(Path value) {
            if (!"grpcs".equals(endpoint.getScheme())) throw new IllegalArgumentException("Trust certificates require TLS");
            trustCertificates = Objects.requireNonNull(value); return this;
        }
        public MediflowClient build() throws IOException { return new MediflowClient(this); }
        private ManagedChannel createChannel() throws IOException {
            String host = endpoint.getHost();
            if (host.startsWith("[")) host = host.substring(1, host.length()-1);
            var builder = NettyChannelBuilder.forAddress(host, endpoint.getPort())
                    .maxInboundMessageSize(MAX_RESPONSE).disableRetry();
            if ("grpc".equals(endpoint.getScheme())) builder.usePlaintext();
            else {
                var ssl = GrpcSslContexts.forClient();
                if (trustCertificates != null) ssl.trustManager(trustCertificates.toFile());
                builder.sslContext(ssl.build());
            }
            return builder.build();
        }
    }

    private static boolean isLoopback(String host) {
        return host.equals("127.0.0.1") || host.equals("::1") || host.equals("[::1]");
    }
    private static void validateToken(String value) {
        if (value == null || value.isBlank() || value.chars().anyMatch(c -> c <= 32 || c >= 127))
            throw new IllegalArgumentException("A nonempty ASCII screen token without whitespace is required");
    }
    private static void validateTimeout(Duration value) {
        Objects.requireNonNull(value, "timeout");
        if (value.isNegative() || value.isZero() || value.compareTo(Duration.ofMinutes(10)) > 0)
            throw new IllegalArgumentException("timeout must be positive and no greater than ten minutes");
    }
    private BackendServiceGrpc.BackendServiceFutureStub deadlineStub() {
        if (channel.isShutdown()) throw new IllegalStateException("Mediflow client is closed");
        return stub.withDeadlineAfter(timeout.toNanos(), TimeUnit.NANOSECONDS);
    }
    private static <T> T await(ListenableFuture<T> pending) throws IOException, InterruptedException {
        try { return pending.get(); }
        catch (InterruptedException error) { pending.cancel(true); Thread.currentThread().interrupt(); throw error; }
        catch (ExecutionException error) {
            Status status = Status.fromThrowable(error.getCause());
            // Do not echo arbitrary server descriptions, which can contain tokens or private payloads.
            throw new ApiException(status.getCode());
        }
    }
    private static void requestSize(MessageLite request) {
        if (request.getSerializedSize() > MAX_REQUEST) throw new IllegalArgumentException("Request exceeds 2 MiB");
    }
    public Mediflow.Snapshot state() throws IOException, InterruptedException {
        var result = await(deadlineStub().getState(Mediflow.Empty.getDefaultInstance()));
        validateSnapshot(result); return result;
    }
    /** Replace the whole template; an empty queue list intentionally clears the screen. */
    public Mediflow.Snapshot publish(String requestId, Mediflow.Template template) throws IOException, InterruptedException {
        identifier(requestId, "requestId"); validateTemplate(Objects.requireNonNull(template, "template"));
        var request = Mediflow.Publish.newBuilder().setRequestId(requestId).setData(template).build();
        requestSize(request);
        var result = await(deadlineStub().publish(request)); validateSnapshot(result); return result;
    }
    public Mediflow.Call createCall(CallRequest input) throws IOException, InterruptedException {
        Objects.requireNonNull(input, "call");
        identifier(input.id(), "id"); identifier(input.queueId(), "queueId"); identifier(input.personId(), "personId");
        required(input.text(), "text");
        if (input.text().getBytes(StandardCharsets.UTF_8).length > 16_384 || input.totalQuota() < 1 || input.totalQuota() > 100)
            throw new IllegalArgumentException("Call text must be <=16384 UTF-8 bytes and totalQuota must be 1..100");
        var builder = Mediflow.Call.newBuilder().setId(input.id()).setQueueId(input.queueId())
                .setPersonId(input.personId()).setText(input.text()).setTotalQuota(input.totalQuota());
        if (input.expiresAt() != null) builder.setExpiresAt(input.expiresAt().toInstant().toString());
        var request = builder.build(); requestSize(request);
        var result = await(deadlineStub().createCall(request)); validateCall(result, false);
        if (!result.getId().equals(input.id())) throw new ProtocolException("Response call ID differs from request");
        return result;
    }
    /** History only, not a playback queue. */
    public Mediflow.CallPage calls() throws IOException, InterruptedException { return callsPage(1, 20); }
    public Mediflow.CallPage callsPage(int page, int pageSize) throws IOException, InterruptedException {
        if (page < 1 || pageSize < 1 || pageSize > 100) throw new IllegalArgumentException("page>=1 and pageSize=1..100 required");
        var result = await(deadlineStub().listCalls(Mediflow.Sync.newBuilder().setPage(page).setPageSize(pageSize).build()));
        long total = result.getTotal();
        if (!result.hasTotal() || !result.hasPage() || !result.hasPageSize() || total < 0 || total > MAX_SAFE_INTEGER
                || result.getPage() < 1 || result.getPageSize() < 1 || result.getPageSize() > 100
                || result.getItemsCount() > result.getPageSize() || result.getItemsCount() > total
                || result.getPage() > (total == 0 ? 1 : 1 + (total - 1) / result.getPageSize()))
            throw new ProtocolException("Invalid call history pagination");
        for (var call : result.getItemsList()) validateCall(call, true);
        return result;
    }
    /** Graceful, bounded channel shutdown; interruption cancels immediately and restores the flag. */
    @Override public void close() {
        channel.shutdown();
        try { if (!channel.awaitTermination(5, TimeUnit.SECONDS)) channel.shutdownNow(); }
        catch (InterruptedException error) { channel.shutdownNow(); Thread.currentThread().interrupt(); }
    }

    private static void validateSnapshot(Mediflow.Snapshot value) throws ProtocolException {
        if (!value.hasVersion() || value.getVersion() < 0 || value.getVersion() > MAX_SAFE_INTEGER
                || !value.hasScreenId() || value.getScreenId().isEmpty() || !value.hasEpoch() || value.getEpoch().isEmpty()
                || !value.hasTemplateVersion() || value.getTemplateVersion().isEmpty() || !value.hasData()) {
            throw new ProtocolException("Invalid snapshot metadata");
        }
        try { validateTemplate(value.getData()); }
        catch (IllegalArgumentException e) { throw new ProtocolException("Invalid snapshot template", e); }
    }

    private static void validateCall(Mediflow.Call call, boolean counters) throws ProtocolException {
        if (!call.hasId() || call.getId().isEmpty() || !call.hasTotalQuota() || call.getTotalQuota() < 1
                || call.getTotalQuota() > 100 || !call.hasActive() || (counters && (!call.hasConsumed() || !call.hasRemaining()))
                || call.getConsumed() < 0 || call.getRemaining() < 0 || call.getConsumed() > call.getTotalQuota()
                || call.getRemaining() > call.getTotalQuota()
                || !call.hasQueueId() || call.getQueueId().isEmpty() || !call.hasPersonId() || call.getPersonId().isEmpty()
                || !call.hasText() || call.getText().isEmpty()
                || (counters && call.getRemaining() != call.getTotalQuota() - call.getConsumed())) throw new ProtocolException("Invalid call response");
    }

    private static void validateTemplate(Mediflow.Template template) {
        var queues = new HashSet<String>();
        for (var queue : template.getQueuesList()) {
            required(queue.getId(), "queue.id"); required(queue.getName(), "queue.name");
            if (!queues.add(queue.getId())) throw new IllegalArgumentException("Duplicate queue ID");
            var sections = new HashSet<String>();
            for (var section : queue.getSectionsList()) {
                required(section.getId(), "section.id"); required(section.getName(), "section.name");
                if (!sections.add(section.getId())) throw new IllegalArgumentException("Duplicate section ID");
                var persons = new HashSet<String>();
                for (var person : section.getPersonsList()) {
                    required(person.getId(), "person.id"); required(person.getName(), "person.name"); required(person.getDisplayNumber(), "person.displayNumber");
                    if (!persons.add(person.getId()) || !person.hasOrder() || !Double.isFinite(person.getOrder())) {
                        throw new IllegalArgumentException("Person ID must be unique and order must be finite");
                    }
                }
            }
        }
    }

    private static void required(String value, String name) {
        if (value == null || value.isEmpty()) throw new IllegalArgumentException(name + " is required");
    }
    private static void identifier(String value, String name) {
        required(value, name);
        if (value.getBytes(StandardCharsets.UTF_8).length > 256) throw new IllegalArgumentException(name + " exceeds 256 UTF-8 bytes");
    }

}
