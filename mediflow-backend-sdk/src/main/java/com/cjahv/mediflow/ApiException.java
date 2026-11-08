package com.cjahv.mediflow;

import io.grpc.Status;
import java.io.IOException;

/** gRPC failure with a stable status. DEADLINE_EXCEEDED/UNAVAILABLE may follow a committed write. */
public final class ApiException extends IOException {
    private final Status.Code code;
    public ApiException(Status.Code code) {
        super("Mediflow gRPC " + code.name());
        this.code = code;
    }
    public Status.Code code() { return code; }
    /** Retry only the same operation ID and payload; this does not retry automatically. */
    public boolean outcomeMayBeUnknown() {
        return code == Status.Code.DEADLINE_EXCEEDED || code == Status.Code.UNAVAILABLE
                || code == Status.Code.CANCELLED || code == Status.Code.UNKNOWN || code == Status.Code.INTERNAL;
    }
}
