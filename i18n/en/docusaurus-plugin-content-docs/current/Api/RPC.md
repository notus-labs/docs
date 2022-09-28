# JSONRPC

:::note
Currently, this documentation is in the draft stage. It may contain word correct or incorrect information
:::

## Introduction

JSONRPC is a remote procedure call protocol encoded in JSON. It’s lightweight, stateless, open and can be used to communicate between different programming languages. The protocol itself is not tied to any particular language or framework but it has become very popular with blockchain platforms like Ethereum because it uses HTTP requests and responses to communicate between client-server applications.

## Listening Port

The default listening port for JSONRPC is 8545.

## How to use JSONRPC Client

You can send JSONRPC requests to the node using any JSONRPC client and any programming language. Here are some examples:

### JavaScript

[**@open-rpc/client-js**](https://github.com/open-rpc/client-js) is a JavaScript client for JSONRPC. It can be used to send requests to the node using JavaScript.

```js
import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";
const transport = new HTTPTransport("http://localhost:8545");
const client = new Client(new RequestManager([transport]));
const result = await client.request({ method: "ping", params: [2, 2] });
// => { jsonrpc: '2.0', id: 1, result: [ "pong" ] }
```

### Python

[**json-rpc**](https://github.com/pavlov99/json-rpc) is a Python client for JSONRPC. It can be used to send requests to the node using Python.

```py
import requests
import json


def main():
    url = "http://localhost:8545"

    # Example echo method
    payload = {
        "method": "ping",
        "params": [],
        "jsonrpc": "2.0",
        "id": 1,
    }
    response = requests.post(url, json=payload).json()
if __name__ == "__main__":
    main()
# { jsonrpc: '2.0', id: 1, result: [ "pong" ] }
```

### C#

[**json-rpc-csharp**](https://github.com/adamashton/json-rpc-csharp) is a C# client for JSONRPC. It can be used to send requests to the node using C#.

```cs
using JsonRPC;
using Newtonsoft.Json.Linq;

using (Client rpcClient = new Client(@"http://localhost:8545"))
{
    Request request = rpcClient.NewRequest("ping");
    GenericResponse response = rpcClient.Rpc(request);

    if (response.Result != null)
    {
        JToken result = response.Result;
    }
    else
        Console.WriteLine(string.Format("Error in response, code:{0} message:{1}",
            response.Error.Code, response.Error.Message);


    // Example with positional parameters
    JArray parameters = JArray.Parse(@"['Small', 'Medium', 'Large' ]");
    Request resuestWithPostionalParameters = rpcClient.NewRequest("ping", parameters);

    // Example with named parameters
    JObject namedParameters = JObject.Parse(@"{ CPU: 'Intel', }");
    Request resuestWithNamedParameters = rpcClient.NewRequest("ping", namedParameters);
}
// { jsonrpc: '2.0', id: 1, result: [ "pong" ] }
```

### Rust

[**rust-jsonrpc**](https://github.com/apoelstra/rust-jsonrpc/) is a Rust client for JSONRPC. It can be used to send requests to the node using Rust.

```rust
use jsonrpc::Client;
use jsonrpc::simple_http::{self, SimpleHttpTransport};

fn client(url: &str) -> Result<Client, simple_http::Error> {
    let t = SimpleHttpTransport::builder()
        .url(url)?
        .build();

    Ok(Client::with_transport(t))
}
x
fn main() {
    let client = client("localhost:8545").expect("failed to create client");
    let request = client.build_request("ping", &[]);
    let response = client.send_request(request).expect("send_request failed");

    // For other commands this would be a struct matching the returned json.
    let result: u64 = response.result().expect("response is an error, use check_error");
    println!("requested ping : {}", result);
}
// { jsonrpc: '2.0', id: 1, result: [ "pong" ] }
```

## Methods
