"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const cluster_1 = __importDefault(require("cluster"));
// const server = http.createServer((req, res) => {
// res.write('hello')
// res.end('hello 4')
// console.log('url', req.url)
// console.log('method', req.method)
// console.log('headers', req.headers)
// res.setHeader('test-header', 'test')
// res.writeHead(200, 'OK!', {
//   'test-header': 'test'
// })
// res.end('end')
// URL
// if (req.url === '/user') {
//   res.end('User found')
// } else {
//   res.writeHead(404, 'User not found', {
//     'test-header': 'test'
//   })
//   res.end('User not found')
// }
// METHOD
// if (req.method === 'GET') {
//   if (req.url) {
//     const {query} = url.parse(req.url, true)
//     console.log(query)
//   }
//   res.end('hello')
// } else if (req.method === 'POST') {
//   let data = ''
//   req.on('data', (chunk) => data += chunk)
//   req.on('end', () => {
//     console.log('data', JSON.parse(data))
//     res.writeHead(200, 'OK', {
//       'Content-Type': 'application/json'
//     })
//     res.end(data)
//   })
//   // res.writeHead(405, 'Method not allowed')
//   // res.end('Method not allowed')
// }
// const file = fs.readFileSync('index.html')
// res.writeHead(200, 'OK', {
//   'Content-type': 'text/html'
// })
// res.end(file)
// })
// server.listen(5555, () => console.log('Server been started http://localhost:5555'))
if (cluster_1.default.isMaster) {
    console.log(`Master ${process.pid} is running...`);
    for (let i = 0; i < os_1.default.cpus().length; i++) {
        console.log(`Forking process number ${i}`);
        cluster_1.default.fork();
    }
}
else {
    console.log(`Worker ${process.pid} is running...`);
    http_1.default
        .createServer((req, res) => {
        // setTimeout(() => {
        // const file = fs.readFileSync("index.html");
        const readStream = fs_1.default.createReadStream('index.html');
        res.writeHead(200, "OK", {
            "Content-Type": "text/html",
        });
        console.log(`Send file for ${process.pid}`);
        readStream.pipe(res);
        // }, 3000);
    })
        .listen(5555, () => console.log("Server been started http://localhost:5555"));
}
