# /info/genesis

**Request Type: GET**

Returns the Genesis block information.

## Response

```json
{
  "Version": 10000,
  "Empty": {
    "Active": true,
    "LuckyReward": 50,
    "TotalSupply": 550000000,
    "Reward": 2,
    "Interval": {
      "Time": 90,
      "Block": 10
    },
    "SlowBlock": {
      "Active": true,
      "Count": 10,
      "Multiply": 10
    },
    "Nonce": {
      "Method": 10,
      "Type": 1,
      "Difficulty": 1
    }
  },
  "Reserve": {
    "Value": 100000000000000000,
    "Total": 0,
    "Digit": 0,
    "Decimal": 9
  },
  "CoinInfo": {
    "Tag": "NOTUS",
    "Name": "Notus Coin",
    "Logo": {
      "Used": true,
      "Base64": "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",
      "Url": "",
      "Source": ""
    }
  },
  "Supply": {
    "Decrease": 3,
    "Type": 1,
    "Modular": 4000
  },
  "Fee": {
    "Transfer": {
      "Fast": 400,
      "Common": 150,
      "NoName": 1000,
      "ByPieces": 4000
    },
    "Token": {
      "Generate": 500000,
      "Update": 900000
    },
    "Data": 1500
  },
  "Info": {
    "Creation": "2022-08-30T07:25:37.682",
    "Creator": "NODCNaXc2hJcsCS4Wuo85W8PQQ9umgf9kms7bDF",
    "CurveName": "prime256v1",
    "EncryptKeyPair": false
  },
  "Premining": {
    "PreSeed": {
      "Volume": 1000000,
      "DecimalContains": false,
      "HowManyMonthsLater": 24,
      "PercentPerMonth": 5,
      "Wallet": "NODcLkeUkCfoatkCrR9krjkndMLNzSfRdJuER6S",
      "PublicKey": "d4c82794686fdb88f1106d8d3367826939f44427be64dfd456cabbc97aa079094b7256ecd0e2e81bd665352bcb484bc5d56ec46ccf0fe805fb3d2a3eb2c74535"
    },
    "Private": {
      "Volume": 2000000,
      "DecimalContains": false,
      "HowManyMonthsLater": 18,
      "PercentPerMonth": 5,
      "Wallet": "NODZdHPSkDxoKLQyvSxRzaxXjok7GxfjxgjnBWT",
      "PublicKey": "9392687e4f50685104869d02075dd43ea22c38823b7342f5dd4c1d79bab1fb6841a7e885e6689d91b873739122cc44bd245b60f7c0febfe77b27ff3ce2bf82da"
    },
    "Public": {
      "Volume": 10000000,
      "DecimalContains": false,
      "HowManyMonthsLater": 12,
      "PercentPerMonth": 5,
      "Wallet": "NODcJG958rckJkaN2rLJbn8H4NotzPEyiPoZrdR",
      "PublicKey": "73a4fb34f411fc72d26ad2247b5384419447b4dd20ab71b31efbafb4e12dace875b0b6624ffb40b53cc008fbc5ca5efd6fc9a88afebd6b5edb2f5789a7161bfa"
    }
  }
}
```
