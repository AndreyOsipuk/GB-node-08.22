"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fib_1 = require("./fib");
describe('fib', () => {
    it('return 13 for 7 argument', () => {
        expect((0, fib_1.fib)(7)).toBe(13);
    });
});
