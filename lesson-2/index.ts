import fs from 'fs';

const createEmptyFileOfSize = (fileName: string) => {
  return new Promise((resolve, reject) => {
    const fh = fs.openSync(fileName, 'w');
    // fs.writeSync(fh, 'ip', Math.max(0, size - 2));
    // fs.closeSync(fh);
    resolve(true);
  });
};

createEmptyFileOfSize('./1.txt');

const ip =
  Math.floor(Math.random() * 255) +
  1 +
  '.' +
  Math.floor(Math.random() * 255) +
  '.' +
  Math.floor(Math.random() * 255) +
  '.' +
  Math.floor(Math.random() * 255);
console.log(ip);
const max = 1024 * 1024 * 10;
fs.stat('./1.txt', (err, stats) => {
  const fileSizeInBytes = stats.size;
  if (fileSizeInBytes < max) {

    // вызов функции
    fs.appendFile('./1.txt', ip, (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  }
});