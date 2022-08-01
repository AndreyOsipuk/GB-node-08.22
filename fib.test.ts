import { fib } from './fib';

describe('fib', () => {
  it('return 13 for 7 argument', () => {
    expect(fib(7)).toBe(13)
  })
})
