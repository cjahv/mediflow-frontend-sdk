package com.cjahv.mediflow;

import com.cjahv.mediflow.proto.Mediflow;
import com.cjahv.mediflow.proto.BackendServiceGrpc;
import io.grpc.*;
import io.grpc.inprocess.InProcessChannelBuilder;
import io.grpc.inprocess.InProcessServerBuilder;
import io.grpc.stub.StreamObserver;
import org.junit.jupiter.api.*;
import java.time.Duration;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import static org.junit.jupiter.api.Assertions.*;

class MediflowClientTest {
    private Server server;
    private MediflowClient client;
    private final AtomicReference<String> auth = new AtomicReference<>();
    private final AtomicInteger attempts = new AtomicInteger();
    private volatile Status failure;
    private volatile boolean hang;
    private volatile Mediflow.Snapshot state = snapshot();
    private volatile Mediflow.Publish publication;
    private volatile Mediflow.Call definition;
    private volatile Mediflow.Sync pagination;
    private final CountDownLatch invoked = new CountDownLatch(1);
    private final AtomicReference<Context> requestContext = new AtomicReference<>();

    private static Mediflow.Snapshot snapshot() {
        return Mediflow.Snapshot.newBuilder().setEpoch(Identifiers.encode("epoch")).setScreenId(Identifiers.encode("screen"))
            .setVersion(1).setTemplateVersion("1").setData(Mediflow.Template.getDefaultInstance()).build();
    }
    @BeforeEach void start() throws Exception {
        var service = new BackendServiceGrpc.BackendServiceImplBase() {
            @Override public void getState(Mediflow.Empty request, StreamObserver<Mediflow.Snapshot> observer) {
                attempts.incrementAndGet(); requestContext.set(Context.current()); invoked.countDown();
                if (hang) return;
                if (failure != null) { observer.onError(failure.asRuntimeException()); return; }
                observer.onNext(state); observer.onCompleted();
            }
            @Override public void publish(Mediflow.Publish request, StreamObserver<Mediflow.Snapshot> observer) {
                attempts.incrementAndGet(); publication=request;
                observer.onNext(snapshot().toBuilder().setData(request.getData()).build()); observer.onCompleted();
            }
            @Override public void createCall(Mediflow.Call request, StreamObserver<Mediflow.Call> observer) {
                definition=request; observer.onNext(request.toBuilder().setActive(true).build()); observer.onCompleted();
            }
            @Override public void listCalls(Mediflow.Sync request, StreamObserver<Mediflow.CallPage> observer) {
                pagination=request;
                observer.onNext(Mediflow.CallPage.newBuilder().setTotal(0).setPage(1).setPageSize(request.getPageSize()).build()); observer.onCompleted();
            }
        };
        String name=InProcessServerBuilder.generateName();
        server=InProcessServerBuilder.forName(name).directExecutor().intercept(new ServerInterceptor() {
            public <ReqT,RespT> ServerCall.Listener<ReqT> interceptCall(ServerCall<ReqT,RespT> call, Metadata headers, ServerCallHandler<ReqT,RespT> next) {
                auth.set(Identifiers.decode(com.google.protobuf.ByteString.copyFrom(headers.get(Metadata.Key.of("mediflow-token-bin",Metadata.BINARY_BYTE_MARSHALLER)))));
                return next.startCall(call,headers);
            }
        }).addService(service).build().start();
        client=new MediflowClient(InProcessChannelBuilder.forName(name).directExecutor().build(),"test-token",Duration.ofMillis(100));
    }
    @AfterEach void stop() throws Exception { client.close(); server.shutdownNow(); server.awaitTermination(2,TimeUnit.SECONDS); }
    @Test void authenticatesAndReturnsTypedState() throws Exception { assertEquals("screen",Identifiers.decode(client.state().getScreenId())); assertEquals("test-token",auth.get()); }
    @Test void completePublishAndCall() throws Exception {
        assertEquals(0,client.publish("request-id",Mediflow.Template.getDefaultInstance()).getData().getQueuesCount());
        assertEquals("request-id",Identifiers.decode(publication.getRequestId()));
        assertEquals("call",Identifiers.decode(client.createCall(new CallRequest("call","queue","person","请到诊室",2)).getId()));
        assertEquals(0,definition.getTargetsCount());
    }
    @Test void historyIsBounded() throws Exception { assertEquals(0,client.callsPage(2,30).getTotal()); assertEquals(2,pagination.getPage()); assertEquals(30,pagination.getPageSize()); }
    @Test void rejectsInvalidRequestsBeforeTransport() {
        assertThrows(IllegalArgumentException.class,()->client.callsPage(0,20));
        assertThrows(IllegalArgumentException.class,()->client.callsPage(1,101));
        assertThrows(IllegalArgumentException.class,()->client.createCall(new CallRequest("c","q","p","x".repeat(16385),1)));
        assertThrows(IllegalArgumentException.class,()->client.createCall(new CallRequest("c","q","p","text",0)));
        assertThrows(IllegalArgumentException.class,()->client.publish("x".repeat(257),Mediflow.Template.getDefaultInstance()));
        assertEquals(0,attempts.get());
    }
    @Test void preservesIdForExplicitRetry() throws Exception { client.publish("same",Mediflow.Template.getDefaultInstance()); client.publish("same",Mediflow.Template.getDefaultInstance()); assertEquals(2,attempts.get()); assertEquals("same",Identifiers.decode(publication.getRequestId())); }
    @Test void statusesAreStableAndDoNotLeakServerDetails() {
        failure=Status.UNAUTHENTICATED.withDescription("secret test-token");
        var error=assertThrows(ApiException.class,()->client.state());
        assertEquals(Status.Code.UNAUTHENTICATED,error.code()); assertFalse(error.outcomeMayBeUnknown()); assertFalse(error.getMessage().contains("test-token"));
    }
    @Test void transientFailureIsNotImplicitlyRetried() { failure=Status.UNAVAILABLE; var e=assertThrows(ApiException.class,()->client.state()); assertTrue(e.outcomeMayBeUnknown()); assertEquals(1,attempts.get()); }
    @Test void deadlineCancelsStalledRpc() { hang=true; var e=assertThrows(ApiException.class,()->client.state()); assertEquals(Status.Code.DEADLINE_EXCEEDED,e.code()); assertTrue(requestContext.get().isCancelled()); }
    @Test void interruptionCancelsAndRestoresFlag() throws Exception {
        hang=true; var interrupted=new AtomicBoolean();
        Thread t=new Thread(()-> { try { client.state(); } catch(InterruptedException e) { interrupted.set(Thread.currentThread().isInterrupted()); } catch(Exception e) { throw new AssertionError(e); } });
        t.start(); assertTrue(invoked.await(1,TimeUnit.SECONDS)); t.interrupt(); t.join(1000);
        assertTrue(interrupted.get()); assertTrue(requestContext.get().isCancelled());
    }
    @Test void invalidTypedResponseFailsClosed() { state=Mediflow.Snapshot.getDefaultInstance(); assertThrows(ProtocolException.class,()->client.state()); }
    @Test void validatesEndpointAndToken() {
        for(String endpoint:new String[]{"http://localhost:9090","grpc://example.com:9090","grpc://localhost:9090","grpcs://host:9090/path","grpcs://token@host:9090","grpcs://host:9090?token=x"})
            assertThrows(IllegalArgumentException.class,()->MediflowClient.builder(endpoint,"token"));
        assertThrows(IllegalArgumentException.class,()->MediflowClient.builder("grpcs://host:9090","bad\ntoken"));
        assertThrows(IllegalArgumentException.class,()->MediflowClient.builder("grpcs://host:9090","token").timeout(Duration.ZERO));
    }
    @Test void closesOwnedChannel() { client.close(); assertThrows(IllegalStateException.class,()->client.state()); }

    @Test void realTransportRejectsOversizedResponse() throws Exception {
        var huge = snapshot().toBuilder().setEpoch(com.google.protobuf.ByteString.copyFromUtf8("\0" + "x".repeat(16 * 1024 * 1024))).build();
        var service = new BackendServiceGrpc.BackendServiceImplBase() {
            @Override public void getState(Mediflow.Empty request, StreamObserver<Mediflow.Snapshot> observer) {
                observer.onNext(huge); observer.onCompleted();
            }
        };
        var real = io.grpc.netty.shaded.io.grpc.netty.NettyServerBuilder.forAddress(
                new java.net.InetSocketAddress("127.0.0.1", 0)).addService(service).build().start();
        try (var bounded = new MediflowClient("grpc://127.0.0.1:" + real.getPort(), "token")) {
            assertEquals(Status.Code.RESOURCE_EXHAUSTED, assertThrows(ApiException.class, bounded::state).code());
        } finally { real.shutdownNow(); real.awaitTermination(2, TimeUnit.SECONDS); }
    }
    @Test void outboundLimitRejectsBeforeRpc() {
        var template = Mediflow.Template.newBuilder().addQueues(Mediflow.Queue.newBuilder()
                .setId(Identifiers.encode("q")).setName("x".repeat(2 * 1024 * 1024))).build();
        assertThrows(IllegalArgumentException.class, () -> client.publish("id", template));
        assertEquals(0, attempts.get());
    }

    @Test void callTextValuesAreExplicitAndLegacyConstructorsStayCompatible() throws Exception {
        client.createCall(new CallRequest("structured", "q", "p", "legacy text", 1, null, "李四", "A011"));
        assertEquals("李四", definition.getPersonName());
        assertEquals("A011", definition.getDisplayNumber());
        client.createCall(new CallRequest("legacy", "q", "p", "unchanged", 1));
        assertFalse(definition.hasPersonName());
        assertFalse(definition.hasDisplayNumber());
        assertThrows(IllegalArgumentException.class, () -> client.createCall(new CallRequest("partial", "q", "p", "text", 1, null, "李四", null)));
    }
}
