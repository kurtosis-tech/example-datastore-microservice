// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_pb = require('./api_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_example_datastore_service_api_GetArgs(arg) {
  if (!(arg instanceof api_pb.GetArgs)) {
    throw new Error('Expected argument of type example_datastore_service_api.GetArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_datastore_service_api_GetArgs(buffer_arg) {
  return api_pb.GetArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_datastore_service_api_GetResponse(arg) {
  if (!(arg instanceof api_pb.GetResponse)) {
    throw new Error('Expected argument of type example_datastore_service_api.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_datastore_service_api_GetResponse(buffer_arg) {
  return api_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_datastore_service_api_UpsertArgs(arg) {
  if (!(arg instanceof api_pb.UpsertArgs)) {
    throw new Error('Expected argument of type example_datastore_service_api.UpsertArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_datastore_service_api_UpsertArgs(buffer_arg) {
  return api_pb.UpsertArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleDatastoreServiceService = exports.ExampleDatastoreServiceService = {
  // Returns when the gRPC server is started and running
isAvailable: {
    path: '/example_datastore_service_api.ExampleDatastoreService/IsAvailable',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  get: {
    path: '/example_datastore_service_api.ExampleDatastoreService/Get',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetArgs,
    responseType: api_pb.GetResponse,
    requestSerialize: serialize_example_datastore_service_api_GetArgs,
    requestDeserialize: deserialize_example_datastore_service_api_GetArgs,
    responseSerialize: serialize_example_datastore_service_api_GetResponse,
    responseDeserialize: deserialize_example_datastore_service_api_GetResponse,
  },
  upsert: {
    path: '/example_datastore_service_api.ExampleDatastoreService/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.UpsertArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_example_datastore_service_api_UpsertArgs,
    requestDeserialize: deserialize_example_datastore_service_api_UpsertArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ExampleDatastoreServiceClient = grpc.makeGenericClientConstructor(ExampleDatastoreServiceService);
