const fs = require('fs')
const inquirer = require('inquirer');
const readline = require('readline')
const color = require('colors')

// const dir = 'C:/Users/User/Desktop'
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ques = (question) =>{
    return new Promise((res)=>{
        r1.question(question,(answer) =>{
        const word = `${answer}`
        res(word)
    })
}
)}

ques(color.cyan('Какое слово или строчку ты хочешь найти, босс?')+'\n')
    .then((word)=>{
        r1.question(color.cyan('Задай директории, босс') + '\n',(answer)=>{
            const dir = `${answer}`
            app(dir,word)
        })

    })

const app = async (dir,word)=>{
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
                app(dir,word)
        })}

    else {        
        let readStream = fs.createReadStream(dir)
        let writeStream = fs.createWriteStream('./data/data.log')
        let r2 = readline.createInterface({
            input: readStream,
            terminal :true
        })
        r2.on('line',(line)=>{
            if(line.includes(word)){
                writeStream.write(word+ '\n')
                console.log(color.green('Я нашёл, что вы искали, босс: ')+word)
            }
            else console.log(color.red('Я ничего не нашёл, босс'))
        })
    }
}

