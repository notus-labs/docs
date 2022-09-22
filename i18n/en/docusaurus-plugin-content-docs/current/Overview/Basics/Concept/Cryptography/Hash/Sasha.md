# Sasha

:::note
Currently, this documentation is in the draft stage. It may contain word correct or incorrect information
:::

The Sasha hash method consists of two rounds.

It uses Ripemd160, SHA1, MD5, and Blake2B hash structures.
Both rounds contain four additions.

```js
function SashaHash(data: string, reverseArray: boolean = true, replaceChar: boolean = true): string
```

Reference: [src/core/hash.ts:11](https://github.com/Notus-Network/NotusJS/blob/main/src/core/hash.ts)

## Before Starting Tours

If the data is to be reversed, it is inverted. For example:

`Input: NRHf747BCHuFvpzDWpxrXvKm1hNBruM7eNmUH4`

`Output: 4HUmNe7MurBNh1mKvXrxpWDzpvFuHCB747fHRN`

With Blake2B, the hash of the text is taken, divided into 16 characters and an array is obtained.

`var Blake2BArray = SplitByLength(Blake2BHash(data), 16);`

With MD5, the text is hashed, divided into 4 characters and an array is obtained.

`var Md5Array = SplitByLength(Md5Hash(data), 4);`

With SHA1, the hash of the text is taken, divided into 5 characters and an array is obtained.

`var Sha1Array = SplitByLength(Sha1Hash(data), 5);`

With Ripemd160, the hash of the text is taken, divided into 5 characters and an array is obtained.

`var Ripemd160Array = SplitByLength(Ripemd160Hash(data), 5);`

## First Round

In the first round, the nth element of the Blake2B, MD5, SHA1 and Ripemd160 arrays is added to a string.

```js
for (var i = 0; i < 8; i++) {
    if (i < 4) {
      res =
        res + Blake2BArray[i] + Md5Array[i] + Sha1Array[i] + Ripemd160Array[i];
    }
...
```

## Second Round

In the second round, the previous values ​​are summed in reverse. In reversed-order; Ripemd160 becomes SHA1, MD5 and Blake2B.

```js
else {
      res =
        res + Ripemd160Array[i] + Sha1Array[i] + Md5Array[i] + Blake2BArray[i];
    }
  }
```

## Çıktı

If the output is "_Default Hex Text_", the third parameter is given as true. In this way, certain characters are replaced with the ReplaceChar function.

```js
const DefaultHexAlphabetString = "0123456789abcdef";
const SimpleHashAlphabetForHexResult = "fedcba9876543210";

function ReplaceChar(sourceText: string, fromText: string, toText: string) {
  var input = sourceText.split("");
  var replaced: boolean[] = [];
  for (var j = 0; j < input.length; j++) replaced[j] = false;
  for (var i = 0; i < fromText.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (replaced[j] === false && input[j] === fromText[i]) {
        input[j] = toText[i];
        replaced[j] = true;
      }
    }
  }
  return input.join("");
}
```

If not requested, the output is returned as it is.

```js
return res;
```
