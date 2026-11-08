package com.cjahv.mediflow;

import java.io.IOException;

/** The response is not the expected Protobuf v3 contract. */
public final class ProtocolException extends IOException {
    public ProtocolException(String message) { super(message); }
    public ProtocolException(String message, Throwable cause) { super(message, cause); }
}
