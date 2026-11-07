export declare const PROTOBUF_CONTENT_TYPE = "application/x-protobuf";
export declare function encode(value: unknown, explicitKind?: string): Uint8Array;
export declare function decode(bytes: Uint8Array | ArrayBuffer, expectedKind?: string): any;
