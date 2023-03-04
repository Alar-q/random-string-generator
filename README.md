# random-string-generator
npm install  
npm start


Решение получше: 
```js
// test генерации UUIDv4
const crypto = require('crypto')

const startTimeMs = Date.now();

let i = 0;
for( ; Date.now() - startTimeMs < 1000; i++){
  const uuid = crypto.randomUUID()
  // console.log(uuid)
}
console.log(i)
```
