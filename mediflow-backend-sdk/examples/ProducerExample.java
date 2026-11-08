import com.cjahv.mediflow.ApiException;
import com.cjahv.mediflow.CallRequest;
import com.cjahv.mediflow.MediflowClient;
import com.cjahv.mediflow.proto.Mediflow;

/** Backend producer example. The screen frontend, not this SDK, consumes and plays calls. */
public class ProducerExample {
    public static void main(String[] args) throws Exception {
        // grpcs://host:9090 in production; grpc://127.0.0.1:9090 only for local development.
        try (var client = new MediflowClient(
                System.getenv("MEDIFLOW_GRPC_URL"), System.getenv("MEDIFLOW_SCREEN_TOKEN"))) {
            // Persist business IDs before sending. Retries reuse the IDs AND identical payloads.
            String revisionId = "queue-revision-20261107-001";
            String callId = "call-20261107-001";
            var person = Mediflow.Person.newBuilder()
                    .setId("person-1").setName("演示人员").setOrder(1).setDisplayNumber("A001").build();
            var template = Mediflow.Template.newBuilder().addQueues(
                    Mediflow.Queue.newBuilder().setId("general").setName("普通门诊")
                            .addSections(Mediflow.Section.newBuilder()
                                    .setId("current").setName("当前叫号").addPersons(person))
                            .addSections(Mediflow.Section.newBuilder()
                                    .setId("waiting").setName("等待叫号"))).build();

            var current = client.publish(revisionId, template); // Full replacement, not a patch.
            System.out.println("Published version " + current.getVersion());
            client.createCall(new CallRequest(callId, "general", person.getId(), "请 A001 到一号诊室", 2));

            // Current display state. Reading it does not consume a call or trigger local audio.
            for (var queue : client.state().getData().getQueuesList()) {
                for (var section : queue.getSectionsList()) {
                    System.out.println(queue.getName() + " / " + section.getName()
                            + ": " + section.getPersonsCount());
                }
            }
        } catch (ApiException error) {
            // UNAUTHENTICATED/PERMISSION_DENIED: fix credentials.
            // ALREADY_EXISTS: inspect immutable-ID/payload conflict.
            // DEADLINE_EXCEEDED/UNAVAILABLE: outcome may be unknown, even if the write committed.
            // Retry only using the persisted ID and identical payload. Never log tokens or people.
            System.err.println("Platform gRPC status " + error.code());
            throw error;
        }
        // InterruptedException: stop this task; SDK preserves the thread's interrupted flag.
        // The try-with-resources block releases the owned channel even after an exception.
    }
}
