#!/usr/bin/env bash
# 2021-07-08 WATERMARK, DO NOT REMOVE - This script was generated from the Kurtosis Bash script template

set -euo pipefail   # Bash "strict mode"
script_dirpath="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root_dirpath="$(dirname "${script_dirpath}")"


# ==================================================================================================
#                                             Constants
# ==================================================================================================
# Assumed to be on the PATH
GENERATOR_SCRIPT_FILENAME="generate-protobuf-bindings.sh"
SUPPORTED_LANGS_FILENAME="supported-languages.txt"
PROTOBUF_DIRNAME="protobuf"
GOLANG_DIRNAME="golang"
TYPESCRIPT_DIRNAME="typescript"



# ==================================================================================================
#                                             Main Logic
# ==================================================================================================
input_dirpath="${root_dirpath}/${PROTOBUF_DIRNAME}"

# Golang
go_output_dirpath="${root_dirpath}/${GOLANG_DIRNAME}/example_datastore_rpc_api_bindings"
if ! GO_MOD_FILEPATH="${root_dirpath}/${GOLANG_DIRNAME}/go.mod" "${GENERATOR_SCRIPT_FILENAME}" "${input_dirpath}" "${go_output_dirpath}" golang; then
    echo "Error: An error occurred generating Go bindings in directory '${go_output_dirpath}'" >&2
    exit 1
fi
echo "Successfully generated Go bindings in directory '${go_output_dirpath}'"

# TypeScript
typescript_output_dirpath="${root_dirpath}/${TYPESCRIPT_DIRNAME}/example_datastore_rpc_api_bindings"
if ! "${GENERATOR_SCRIPT_FILENAME}" "${input_dirpath}" "${typescript_output_dirpath}" typescript; then
    echo "Error: An error occurred generating TypeScript bindings in directory '${typescript_output_dirpath}'" >&2
    exit 1
fi
echo "Successfully generated TypeScript bindings in directory '${typescript_output_dirpath}'"
