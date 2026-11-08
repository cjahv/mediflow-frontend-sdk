package com.cjahv.mediflow;

import java.time.OffsetDateTime;

/** Immutable call definition. Reuse its ID and all fields for an uncertain-outcome retry. */
public record CallRequest(String id, String queueId, String personId, String text,
                          int totalQuota, OffsetDateTime expiresAt) {
    public CallRequest(String id, String queueId, String personId, String text, int totalQuota) {
        this(id, queueId, personId, text, totalQuota, null);
    }
}
