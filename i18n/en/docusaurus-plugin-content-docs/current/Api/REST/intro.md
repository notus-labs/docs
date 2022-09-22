# API Reference

Each NoVa includes a REST API. In this way, data sharing and data retrieval can be done quickly.

Request can be made in x-www-form-urlencoded and JSON formats.

## Listened Ports

Different layers and networks are listened to by different ports. The use of these ports can be seen in the examples below.

The ports given are just the default ports. You can change these default ports while the Node is booting.

Default Port Number: 5000

- Layer1

  - Mainnet: `Default Port Number + 0`
  - Testnet: `Default Port Number + 1`
  - Devnet: `Default Port Number + 2`

- Layer2

  - Mainnet: `Default Port Number + 100`
  - Testnet: `Default Port Number + 101`
  - Devnet: `Default Port Number + 102`

- Layer3

  - Mainnet: `Default Port Number + 200`
  - Testnet: `Default Port Number + 201`
  - Devnet: `Default Port Number + 202`

- Layer4

  - Mainnet: `Default Port Number + 300`
  - Testnet: `Default Port Number + 301`
  - Devnet: `Default Port Number + 302`

- Layer5

  - Mainnet: `Default Port Number + 400`
  - Testnet: `Default Port Number + 401`
  - Devnet: `Default Port Number + 402`

- Layer6

  - Mainnet: `Default Port Number + 500`
  - Testnet: `Default Port Number + 501`
  - Devnet: `Default Port Number + 502`

- Layer7

  - Mainnet: `Default Port Number + 600`
  - Testnet: `Default Port Number + 601`
  - Devnet: `Default Port Number + 602`

- Layer8

  - Mainnet: `Default Port Number + 700`
  - Testnet: `Default Port Number + 701`
  - Devnet: `Default Port Number + 702`

- Layer9

  - Mainnet: `Default Port Number + 800`
  - Testnet: `Default Port Number + 801`
  - Devnet: `Default Port Number + 802`

- Layer10

  - Mainnet: `Default Port Number + 900`
  - Testnet: `Default Port Number + 901`
  - Devnet: `Default Port Number + 902`

## Get Request Example

The format of a typical HTTP GET request is as follows(in JS/TS/C#):

### Javascript / Typescript

```javascript
export function GetRequest(url) {
  return fetch(url).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

```typescript
export function GetRequest(url: string): Promise<string> {
  return fetch(url).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

### C#

```cs
public static async Task<string> Get(string UrlAddress, int TimeOut = 0, bool UseTimeoutAsSecond = true)
{
    try
    {
        using (var client = new HttpClient())
        {
            if (TimeOut > 0)
            {
                client.Timeout = (UseTimeoutAsSecond == true ? TimeSpan.FromSeconds(TimeOut * 1000) : TimeSpan.FromMilliseconds(TimeOut));
            }
            HttpResponseMessage response = await client.GetAsync(UrlAddress);
            if (response.IsSuccessStatusCode)
            {
                HttpContent responseContent = response.Content;
                return await responseContent.ReadAsStringAsync();
            }
        }
    }
    catch (Exception err)
    {
        Console.WriteLine(err.Message);
    }
    return string.Empty;
}
```

## POST Request Example

The format of a typical HTTP GET request is as follows(in JS/TS/C#):

### Javascript / Typescript

```javascript
export function PostRequest(url, object) {
  return fetch(url, {
    method: "POST",
    body: new URLSearchParams({
      data: JSON.stringify(object),
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

```typescript
export function PostRequest<T>(url: string, object: T): Promise<string> {
  return fetch(url, {
    method: "POST",
    // x-www-form-urlencoded
    body: new URLSearchParams({
      data: JSON.stringify(object),
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

### C#

```cs
public static async Task<string> Post(string UrlAddress, Dictionary<string, string> PostData, int TimeOut = 0, bool UseTimeoutAsSecond = true)
{
    using (HttpClient client = new HttpClient())
    {
        if (TimeOut > 0)
        {
            client.Timeout = (UseTimeoutAsSecond == true ? TimeSpan.FromSeconds(TimeOut * 1000) : TimeSpan.FromMilliseconds(TimeOut));
        }

        HttpResponseMessage response = await client.PostAsync(UrlAddress, new FormUrlEncodedContent(PostData));
        if (response.IsSuccessStatusCode)
        {
            HttpContent responseContent = response.Content;
            return await responseContent.ReadAsStringAsync();
        }
    }
    return string.Empty;
}
```

## Path List

---

### Node

| Type | Path                             | Description                            |
| :--- | :------------------------------- | :------------------------------------- |
| GET  | [/online](Node/online.md)        | Shows the online status of the node.   |
| GET  | [/node](Node/node.md)            | Shows the node list of all types.      |
| GET  | [/master](Node/master.md)        | Shows the node list of master type.    |
| GET  | [/main ](Node/main.md)           | Shows the node list of main type.      |
| GET  | [/replicant ](Node/replicant.md) | Shows the node list of replicant type. |

### Metrics

| Type | Path                                       | Description                                                       |
| :--- | :----------------------------------------- | :---------------------------------------------------------------- |
| GET  | [/metrics/node](Metrics/node.md)           | Shows how much node is online right now.                          |
| GET  | [/metrics/master](Metrics/master.md)       | Shows how much master node is online right now, with its list.    |
| GET  | [/metrics/main](Metrics/main.md)           | Shows how much main node is online right now, with its list.      |
| GET  | [/metrics/replicant](Metrics/replicant.md) | Shows how much replicant node is online right now, with its list. |
| GET  | [/metrics/block](Metrics/block.md)         | Shows how many blocks are currently on the Blockchain.            |

### Blockchain

| Type | Path                                         | Parameters | Description                                                         |
| :--- | :------------------------------------------- | :--------- | :------------------------------------------------------------------ |
| GET  | [/block/summary](Blockchain/summary.md)      |            | Returns information about the last block.                           |
| GET  | [/block/last](Blockchain/last.md)            |            | Displays the contents of the last block.                            |
| GET  | [/block/hash/{uuid}](Blockchain/hash.md)     | Block UUID | Indicates the block hash value for which the UUID value is given.   |
| GET  | [/block/status/{uuid}](Blockchain/status.md) | Block UUID | Indicates the state of the block for which the UUID value is given. |
| GET  | [/currency/list](Blockchain/currencylist.md) |            | Shows all available currencies.                                     |
| GET  | [/info/genesis](Blockchain/infogenesis.md)   |            | Returns the Genesis block information.                              |
| GET  | [/info/transfer](Blockchain/infotransfer.md) |            | It gives the fee information of the current transactions.           |
| GET  | [/info/reserve](Blockchain/inforeserve.md)   |            | Returns the reserved amount of Notus Token.                         |

### Wallet

| Type | Path                                      | Parameters | Description                                                                     |
| :--- | :---------------------------------------- | :--------- | :------------------------------------------------------------------------------ |
| GET  | [/balance/{walletKey}](Wallet/balance.md) | Wallet Key | Returns the balance information of the wallet to which the wallet key is given. |

### Transaction

:::info

Airdrop is only available for Testnet and Devnet.

:::

| Tip  | Path                                                           | Parameters            | Description                                                    |
| :--- | :------------------------------------------------------------- | :-------------------- | :------------------------------------------------------------- |
| POST | [/send?data="preTranfer"](Transaction/send.md)                 | preTransfer Structure | Transfers to the specified address.                            |
| GET  | [/transaction/status/{uuid}](Transaction/transactionstatus.md) | Tx UUID               | Indicates the process state for which the UUID value is given. |
| GET  | [/airdrop/{walletKey}](Transaction/airdrop.md)                 | Wallet Key            | Airdrops money to the given wallet key.                        |
