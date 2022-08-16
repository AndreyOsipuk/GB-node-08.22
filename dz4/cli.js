const fs = require('fs')
const inquirer = require('inquirer');
const readline = require('readline')
const color = require('colors')

const dir = 'C:/Users/User/Desktop'
word = 'стримы'

const app = (dir,word)=>{
    let static = fs.statSync(dir) 

    if(static.isDirectory()) {
        inquirer.prompt(
            {
                type: 'list',
                name: 'fileName',
                message: 'Выберите объект: ',
                default: 'Не судьба',
                choices: fs.readdirSync(dir)  
            }
        ).then((answer)=>{
                dir = dir + `/${answer.fileName}`
                app(dir)
        })}

    else {        
        let readStream = fs.createReadStream(dir)
        let writeStream = fs.createWriteStream('./data/data.log')
        let r1 = readline.createInterface({
            input: readStream,
            terminal :true
        })
        r1.on('line',(line)=>{
            if(line.includes('мамапа'))
            writeStream.write('мамапа'+ '\n')
        })
        r1.on('end',(end) =>{
            console.log(color.green('Песента спета'))
        })
    }
}

app(dir, word)
