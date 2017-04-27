const hello = require('../lib')

test('module exports a function', () => {
  expect(typeof hello).toBe('function')
})

test('returns the expected value', () => {
  expect(hello('foo')).toBe('hello foo')
})
