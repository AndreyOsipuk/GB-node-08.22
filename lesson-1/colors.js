import colors from 'colors'
import readline from 'readline'

// const args = process.argv.slice(2)
// const [ name, age ] = args

// console.log(colors.green('hello ' + name));
// console.log(colors.red('age' + age));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

rl.on('line', (input) => {
  console.log(`Received: ${input}`);

  if( input === "exit") {
    rl.close();
  }
});