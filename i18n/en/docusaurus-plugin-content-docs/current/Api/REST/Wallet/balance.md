---
title: /balance/{walletKey}
---

# /balance/{walletKey}

**Request Type: GET**

Returns the balance information of the wallet to which the wallet key is given.

## Parameters

- Wallet Key
  - A 39-character wallet key.

## Response

```json
{
  "Wallet": "NODcT4M7P5aDap1ieUUq4nXsCjypgTUg8vHaxoG",
  "Balance": {
    "NOTUS": {
      "20220830211048003": "2000000000",
      "20220831003826802": "2000000000"
    }
  },
  "RowNo": 73,
  "UID": "1348b9e34358000c88dbc28438baf0ef8a33bf3c0b0b6ba03fd20492f075f1347d3bc842bca8c5ea1dd1c63a88"
}
```
