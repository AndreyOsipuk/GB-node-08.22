
const fs = require('fs')
const readline = require('readline')
const fileLog = './data/Mascks.log'
const color = require('colors')

const readStream = fs.createReadStream(fileLog)
const writeStream126 =fs.createWriteStream('./data/126.125.1.62_requests.log')
const writeStream154=fs.createWriteStream('./data/154.85.1.62_requests.log')

const r1 = readline.createInterface({
    input: readStream,
    terminal: true
})

r1.on('line', (line) => {
    if (line.includes('126.125.1.62')) writeStream126.write(line+ '\n')
})
r1.on('line', (line) => {
    if (line.includes('154.85.1.62')) writeStream154.write(line+ '\n')
})
r1.on('end',()=>{
    console.log(color.green('Всё готово'))
})