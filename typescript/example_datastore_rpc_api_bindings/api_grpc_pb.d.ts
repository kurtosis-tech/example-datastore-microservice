// GENERATED CODE -- DO NOT EDIT!

// package: example_datastore_service_api
// file: api.proto

import * as api_pb from "./api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IExampleDatastoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  isAvailable: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  get: grpc.MethodDefinition<api_pb.GetArgs, api_pb.GetResponse>;
  upsert: grpc.MethodDefinition<api_pb.UpsertArgs, google_protobuf_empty_pb.Empty>;
}

export const ExampleDatastoreServiceService: IExampleDatastoreServiceService;

export interface IExampleDatastoreServiceServer extends grpc.UntypedServiceImplementation {
  isAvailable: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  get: grpc.handleUnaryCall<api_pb.GetArgs, api_pb.GetResponse>;
  upsert: grpc.handleUnaryCall<api_pb.UpsertArgs, google_protobuf_empty_pb.Empty>;
}

export class ExampleDatastoreServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  isAvailable(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  isAvailable(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  isAvailable(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  get(argument: api_pb.GetArgs, callback: grpc.requestCallback<api_pb.GetResponse>): grpc.ClientUnaryCall;
  get(argument: api_pb.GetArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.GetResponse>): grpc.ClientUnaryCall;
  get(argument: api_pb.GetArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.GetResponse>): grpc.ClientUnaryCall;
  upsert(argument: api_pb.UpsertArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  upsert(argument: api_pb.UpsertArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  upsert(argument: api_pb.UpsertArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
