"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fib_1 = require("./fib");
// sync
// const file = fs.readFileSync('index.html', {
//   encoding: 'utf8'
// })
// console.log(file)
// fs.promises.readFile('index.html').then(console.log)
// fs.readFile('index.html', (err, data) => {
//   if (err) {
//     console.log('error', err)
//   }
//   console.log(data)
// })
console.log((0, fib_1.fib)(7));
