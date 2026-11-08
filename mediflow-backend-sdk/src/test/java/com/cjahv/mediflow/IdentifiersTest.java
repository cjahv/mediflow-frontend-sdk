package com.cjahv.mediflow;

import com.google.protobuf.ByteString;
import java.nio.charset.StandardCharsets;
import java.util.HexFormat;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class IdentifiersTest {
    @Test void losslessTextAndCompactGolden() {
        for(String text:new String[]{"", "0001", "病人-01", "\uFEFFid", "ABCDEFAB-1234-1234-1234-ABCDEFABCDEF"}) {
            assertEquals(text,Identifiers.decode(Identifiers.encode(text)));
            assertEquals(0,Identifiers.encode(text).byteAt(0));
        }
        String uuid="12345678-1234-4234-8234-123456789abc";
        assertEquals("0112345678123442348234123456789abc",HexFormat.of().formatHex(Identifiers.encode(uuid).toByteArray()));
        assertEquals(uuid,Identifiers.decode(Identifiers.encode(uuid)));
        for(int i=0;i<256;i++) {
            byte[] bytes=new byte[24]; java.util.Arrays.fill(bytes,(byte)i);
            String token=HexFormat.of().formatHex(bytes);
            assertEquals(25,Identifiers.encode(token).size());
            assertEquals(token,Identifiers.decode(Identifiers.encode(token)));
        }
    }
    @Test void rejectsMalformedAndAlternativeRepresentations() {
        for(byte[] bad:new byte[][]{{},{3},{1},{2},{0,(byte)0xff},{0,(byte)0xc0,(byte)0x80},new byte[4098]})
            assertThrows(IllegalArgumentException.class,()->Identifiers.decode(ByteString.copyFrom(bad)));
        String uuid="12345678-1234-4234-8234-123456789abc";
        assertThrows(IllegalArgumentException.class,()->Identifiers.decode(ByteString.copyFromUtf8("\0"+uuid)));
        assertThrows(IllegalArgumentException.class,()->Identifiers.encode("\uD800"));
        assertThrows(IllegalArgumentException.class,()->Identifiers.encode("a".repeat(4097)));
        assertEquals(4097,Identifiers.encode("a".repeat(4096)).size());
    }
}
