// package: example_datastore_service_api
// file: api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetArgs extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetArgs): GetArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArgs;
  static deserializeBinaryFromReader(message: GetArgs, reader: jspb.BinaryReader): GetArgs;
}

export namespace GetArgs {
  export type AsObject = {
    key: string,
  }
}

export class GetResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    value: string,
  }
}

export class UpsertArgs extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertArgs.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertArgs): UpsertArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertArgs;
  static deserializeBinaryFromReader(message: UpsertArgs, reader: jspb.BinaryReader): UpsertArgs;
}

export namespace UpsertArgs {
  export type AsObject = {
    key: string,
    value: string,
  }
}

