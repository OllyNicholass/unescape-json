# unescape-json

> Convert a serialized/escaped JSON string into a JSON Object.

## Install

```bash
npm install unescape-json
```

## Usage

```js
const decodeJson = require("unescape-json");

const json = "{\r\n\"people\":[\r\n{\r\n\"name\":\"John\",\r\n\"age\":30,\r\n\"cars\":[\r\n\"Mercedes\"\r\n]\r\n},\r\n{\r\n\"name\":\"Sally\",\r\n\"age\":24,\r\n\"cars\":[\r\n\"Ford\",\r\n\"BMW\",\r\n\"Fiat\"\r\n]\r\n}\r\n]\r\n}";

var decodedJson = decodeJson(json); // Returns JSON Object

console.log(JSON.stringify(decodedJson, null, 2));
// {
//   "people": [
//     {
//       "name": "John",
//       "age": 30,
//       "cars": [
//         "Mercedes"
//       ]
//     },
//     {
//       "name": "Sally",
//       "age": 24,
//       "cars": [
//         "Ford",
//         "BMW",
//         "Fiat"
//       ]
//     }
//   ]
// }
```

## License

MIT © [Olly Nicholass](https://ollynicholass.com)
