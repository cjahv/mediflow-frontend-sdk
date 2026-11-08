package com.cjahv.mediflow;

import com.cjahv.mediflow.proto.Mediflow;
import org.junit.jupiter.api.Test;
import java.util.UUID;
import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

/** Uses only synthetic data. Set both environment variables to explicitly target a test screen. */
class LiveIntegrationTest {
    private static MediflowClient client(String endpoint, String token) throws Exception {
        var builder = MediflowClient.builder(endpoint, token);
        var ca = System.getenv("MEDIFLOW_GRPC_CA_CERT");
        if (ca != null && !ca.isBlank()) builder.trustCertificates(java.nio.file.Path.of(ca));
        return builder.build();
    }
    @Test void javaProducerAgainstRealPlatform() throws Exception {
        String base = System.getenv("MEDIFLOW_GRPC_URL"), token = System.getenv("MEDIFLOW_SCREEN_TOKEN");
        if (Boolean.getBoolean("mediflow.requireLive")) assertTrue(base != null && token != null, "Live test configuration required");
        assumeTrue(base != null && token != null, "Set MEDIFLOW_GRPC_URL and MEDIFLOW_SCREEN_TOKEN for real integration");
        if (System.getenv("MEDIFLOW_GRPC_CA_CERT") != null) {
            // A private CA must not be silently trusted; never disable certificate verification.
            try (var untrusted = MediflowClient.builder(base, token)
                    .timeout(java.time.Duration.ofSeconds(3)).build()) {
                assertEquals(io.grpc.Status.Code.UNAVAILABLE,
                        assertThrows(ApiException.class, untrusted::state).code());
            }
        }
        try (var client = client(base, token)) {
        String id = "java-live-" + UUID.randomUUID();
        var person = Mediflow.Person.newBuilder().setId(Identifiers.encode("synthetic-p1")).setName("合成测试人员").setDisplayNumber("A001").setOrder(1.5);
        var queue = Mediflow.Queue.newBuilder().setId(Identifiers.encode("general")).setName("普通门诊")
            .addSections(Mediflow.Section.newBuilder().setId(Identifiers.encode("current")).setName("当前叫号").addPersons(person))
            .addSections(Mediflow.Section.newBuilder().setId(Identifiers.encode("waiting")).setName("等待叫号"));
        var template = Mediflow.Template.newBuilder().addQueues(queue)
            .addQueues(Mediflow.Queue.newBuilder().setId(Identifiers.encode("expert")).setName("专家门诊").addSections(Mediflow.Section.newBuilder().setId(Identifiers.encode("custom")).setName("自定义分区"))).build();
        var first = client.publish(id, template);
        assertEquals(first.getVersion(), client.publish(id, template).getVersion(), "Same request ID must not increase version");
        assertEquals(template, client.state().getData());
        var pool = java.util.concurrent.Executors.newFixedThreadPool(4);
        try {
            var jobs = new java.util.ArrayList<java.util.concurrent.Callable<Long>>();
            for (int i = 0; i < 8; i++) jobs.add(() -> client.publish(id, template).getVersion());
            for (var future : pool.invokeAll(jobs)) assertEquals(first.getVersion(), future.get());
        } finally { pool.shutdownNow(); }
        var definition = new CallRequest(id, "general", "synthetic-p1", "请 A001 到一号诊室", 2);
        assertEquals(id, Identifiers.decode(client.createCall(definition).getId()));
        assertEquals(id, Identifiers.decode(client.createCall(definition).getId()));
        var callsPool = java.util.concurrent.Executors.newFixedThreadPool(4);
        try {
            var jobs = new java.util.ArrayList<java.util.concurrent.Callable<String>>();
            for (int i = 0; i < 8; i++) jobs.add(() -> Identifiers.decode(client.createCall(definition).getId()));
            for (var future : callsPool.invokeAll(jobs)) assertEquals(id, future.get());
        } finally { callsPool.shutdownNow(); }
        var page = client.callsPage(1, 100);
        assertTrue(page.getItemsList().stream().anyMatch(c -> Identifiers.decode(c.getId()).equals(id) && c.getRemaining() == 2));
        assertThrows(ApiException.class, () -> client.publish(id, Mediflow.Template.getDefaultInstance()));
        assertThrows(ApiException.class, () -> client.createCall(new CallRequest(id,"general","synthetic-p1","conflict",2)));
        try (var invalid = client(base,"invalid-test-token")) {
            assertEquals(io.grpc.Status.Code.UNAUTHENTICATED, assertThrows(ApiException.class, invalid::state).code());
        }
        System.out.println("Java SDK real platform: publish/state/call/history/auth/idempotency/conflict PASS");
        }
    }
}
