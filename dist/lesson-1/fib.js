"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = void 0;
function fib(num) {
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    return fib(num - 1) + fib(num - 2);
}
exports.fib = fib;
