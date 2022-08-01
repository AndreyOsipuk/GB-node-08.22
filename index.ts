import fs from 'fs'
import { fib } from './fib'
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

console.log(fib(7))