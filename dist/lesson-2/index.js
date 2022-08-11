"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const createEmptyFileOfSize = (fileName) => {
    return new Promise((resolve, reject) => {
        const fh = fs_1.default.openSync(fileName, 'w');
        // fs.writeSync(fh, 'ip', Math.max(0, size - 2));
        // fs.closeSync(fh);
        resolve(true);
    });
};
createEmptyFileOfSize('./1.txt');
const ip = Math.floor(Math.random() * 255) +
    1 +
    '.' +
    Math.floor(Math.random() * 255) +
    '.' +
    Math.floor(Math.random() * 255) +
    '.' +
    Math.floor(Math.random() * 255);
console.log(ip);
const max = 1024 * 1024 * 10;
fs_1.default.stat('./1.txt', (err, stats) => {
    const fileSizeInBytes = stats.size;
    if (fileSizeInBytes < max) {
        // вызов функции
        fs_1.default.appendFile('./1.txt', ip, (err) => {
            if (err)
                throw err;
            console.log('The "data to append" was appended to file!');
        });
    }
});
