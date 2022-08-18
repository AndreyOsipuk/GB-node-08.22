
const fs = require('fs')
const color = require('colors')

const generateIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const fileGenarte = () =>{
    const fileLog = './data/Mascks.log'
    const fileSize = 104857600

    const writeStream = fs.createWriteStream(
        fileLog,
        {
            encoding: 'utf-8',
            flags: 'a'
        }
    )
    const writingFunc = async (num) =>{
        return new Promise((res) => writeStream.write(num,res))
    }
    const ipLogGen = async () =>{
        let ip = generateIntInRange(0,255) + '.' +generateIntInRange(0,255)+ '.' + +generateIntInRange(0,255)+ '.'+ generateIntInRange(0,255)
        let masck = `${ip} -- [25/May/2021:00:07:24 +0000] "POST /baz HTTP/1.1" 200 0 "-" "curl/7.47.0"`+'\n'

        for(const i of masck){
            await writingFunc(i)
        }
        if(fs.lstatSync(fileLog).size <= fileSize) await ipLogGen()
        else {
            writeStream.end()
            console.log(color.green('Всё тип-топ'))
        }
    }
    ipLogGen()
}
fileGenarte()