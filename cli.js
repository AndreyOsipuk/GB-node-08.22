#!/usr/bin/env node
// #!/home/andrey/.nvm/versions/node/v16.13.2/bin/node

const fs = require('fs');
const readline = require('readline');
// const yargs = require('yargs');
const path = require('path');
const inquirer = require('inquirer');

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   console.log(data)
// })

// const options = yargs.usage('Usage: -p <path to file>').options('p', {
//   alias: 'path',
//   describe: 'Path to file',
//   type: 'string',
//   demandOption: true,
// }).argv

// fs.readFile(options.p, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   console.log(data)
// })

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Введите путь до файла: ', (filePath) => {
//   rl.question('Введите кодировку файла: ', (encode) => {
//     fs.readFile(filePath, encode, (err, data) => {
//       if (err) {
//         console.log(err);
//       }

//       console.log(data);
//       rl.close();
//     });
//   });
// });

// const question = async (query) =>
//   new Promise((resolve, reject) => rl.question(query, resolve));

// (async () => {
//   const filePath = await question('Введите путь до файла: ');
//   const encode = await question('Введите кодировка файла: ');

//   fs.readFile(path.join(__dirname, filePath), encode, (err, data) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log(data);
//   });

//   rl.close();
// })();
const executionDir = process.cwd();

const fileFilter = (fileOrDir) => fs.lstatSync(fileOrDir).isFile();
const list = fs.readdirSync('./').filter(fileFilter);

inquirer
  .prompt([
    {
      name: 'fileName',
      type: 'list', // input, number, confirm, list, chackbox, password
      message: 'Выберите файл для чтения',
      choices: list,
    },
  ])
  .then(({ fileName }) => {
    const fullFilePath = path.join(executionDir, fileName);

    fs.readFile(fullFilePath, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  });
