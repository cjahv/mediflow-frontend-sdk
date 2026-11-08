package com.cjahv.mediflow;

import com.cjahv.mediflow.proto.Mediflow;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.OffsetDateTime;
import java.util.Base64;
import java.util.HashMap;

/** Test-only stdio bridge: Node WS acceptance drives the actual Java gRPC SDK. */
public final class GrpcBridge {
    public static void main(String[] args) throws Exception {
        String endpoint = System.getenv("MEDIFLOW_GRPC_URL");
        if (endpoint == null) throw new IllegalStateException("MEDIFLOW_GRPC_URL required");
        var clients = new HashMap<String, MediflowClient>();
        try (var input = new BufferedReader(new InputStreamReader(System.in, StandardCharsets.UTF_8))) {
            String line;
            while ((line = input.readLine()) != null) {
                try {
                    String[] fields = line.split("\t", -1);
                    if (fields.length != 3) throw new IllegalArgumentException("Invalid bridge request");
                    var client = clients.get(fields[1]);
                    if (client == null) { client = new MediflowClient(endpoint, fields[1]); clients.put(fields[1], client); }
                    var packet = Mediflow.Packet.parseFrom(Base64.getDecoder().decode(fields[2]));
                    var output = Mediflow.Packet.newBuilder().setProtocolVersion(4);
                    String[] operation = fields[0].split(":");
                    switch (operation[0]) {
                        case "publish" -> output.setSnapshot(client.publish(Identifiers.decode(packet.getPublish().getRequestId()), packet.getPublish().getData()));
                        case "state" -> output.setSnapshot(client.state());
                        case "call" -> {
                            var call = packet.getCall();
                            output.setCall(client.createCall(new CallRequest(Identifiers.decode(call.getId()), Identifiers.decode(call.getQueueId()), Identifiers.decode(call.getPersonId()), call.getText(), (int) call.getTotalQuota(), call.hasExpiresAt() ? OffsetDateTime.parse(call.getExpiresAt()) : null)));
                        }
                        case "calls" -> output.setCallPage(client.callsPage(Integer.parseInt(operation[1]), Integer.parseInt(operation[2])));
                        default -> throw new IllegalArgumentException("Invalid bridge operation");
                    }
                    System.out.println("OK\t" + Base64.getEncoder().encodeToString(output.build().toByteArray()));
                } catch (Exception error) {
                    String message = error instanceof ApiException api ? api.code().name() : error.getClass().getSimpleName();
                    System.out.println("ERR\t" + Base64.getEncoder().encodeToString(message.getBytes(StandardCharsets.UTF_8)));
                }
                System.out.flush();
            }
        } finally { for (var client : clients.values()) client.close(); }
    }
}
