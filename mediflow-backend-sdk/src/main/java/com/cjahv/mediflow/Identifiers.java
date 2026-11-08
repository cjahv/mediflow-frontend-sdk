package com.cjahv.mediflow;

import com.google.protobuf.ByteString;
import com.google.protobuf.Message;
import com.google.protobuf.Descriptors.FieldDescriptor;
import java.nio.ByteBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.CodingErrorAction;
import java.nio.charset.StandardCharsets;
import java.util.HexFormat;
import java.util.List;
import java.util.regex.Pattern;

/** Lossless v4 ID/token codec. Text spelling, leading zeros and all random bits survive. */
public final class Identifiers {
    private Identifiers() {}
    private static final Pattern UUID = Pattern.compile("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}");
    private static final Pattern RANDOM = Pattern.compile("[0-9a-f]{48}");
    public static ByteString encode(String value) {
        if (value == null) throw new IllegalArgumentException("Identifier text required");
        int kind; byte[] raw;
        if (UUID.matcher(value).matches()) {kind=1;raw=HexFormat.of().parseHex(value.replace("-", ""));}
        else if (RANDOM.matcher(value).matches()) {kind=2;raw=HexFormat.of().parseHex(value);}
        else {kind=0;raw=value.getBytes(StandardCharsets.UTF_8);if (raw.length>4096 || !new String(raw,StandardCharsets.UTF_8).equals(value)) throw new IllegalArgumentException("Invalid identifier UTF-8 or size");}
        byte[] output = new byte[raw.length+1];output[0]=(byte)kind;System.arraycopy(raw,0,output,1,raw.length);
        return ByteString.copyFrom(output);
    }
    public static String decode(ByteString value) {
        if (value == null || value.isEmpty() || value.size()>4097) throw new IllegalArgumentException("Invalid compact identifier size");
        byte[] bytes=value.toByteArray();String text;
        if (bytes[0]==0) {
            try {text=StandardCharsets.UTF_8.newDecoder().onMalformedInput(CodingErrorAction.REPORT).onUnmappableCharacter(CodingErrorAction.REPORT).decode(ByteBuffer.wrap(bytes,1,bytes.length-1)).toString();}
            catch(CharacterCodingException error) {throw new IllegalArgumentException("Invalid identifier UTF-8");}
        } else if ((bytes[0]==1 && bytes.length==17) || (bytes[0]==2 && bytes.length==25)) {
            String hex=HexFormat.of().formatHex(bytes,1,bytes.length);
            text=bytes[0]==1?hex.substring(0,8)+"-"+hex.substring(8,12)+"-"+hex.substring(12,16)+"-"+hex.substring(16,20)+"-"+hex.substring(20):hex;
        } else throw new IllegalArgumentException("Invalid compact identifier kind or length");
        if (!encode(text).equals(value)) throw new IllegalArgumentException("Noncanonical compact identifier");
        return text;
    }
    static void validate(Message message) {validate(message,0);}
    private static void validate(Message message,int depth) {
        if(depth>64) throw new IllegalArgumentException("Identifier message nesting limit");
        for(var entry:message.getAllFields().entrySet()) {
            var field=entry.getKey();var value=entry.getValue();
            if(field.isRepeated()) for(Object element:(List<?>)value) validateValue(field,element,depth);
            else validateValue(field,value,depth);
        }
    }
    private static void validateValue(FieldDescriptor field,Object value,int depth) {
        if(field.getJavaType()==FieldDescriptor.JavaType.BYTE_STRING) decode((ByteString)value);
        else if(field.getJavaType()==FieldDescriptor.JavaType.MESSAGE) validate((Message)value,depth+1);
    }
}
