const assert = require('chai').assert;
const { string_this_float } = require('../write_checks.js');

describe('string_this_float', () => {

  it('returns One hundred', () => {
    assert.deepEqual(string_this_float(100), 'One hundred and 00/100 dollars')
  })
  it('returns Two thousand, five hundred twenty-three and 04/100', () => {
    assert.deepEqual(string_this_float(2523.04), 'Two thousand five hundred twenty-three and 04/100 dollars')
  })
  it('returns Three and 14/100', () => {
    assert.deepEqual(string_this_float(Math.PI), 'Three and 14/100 dollars')
  })
  it('returns Zero', () => {
    assert.deepEqual(string_this_float(0), 'Zero dollars')
  })
  it('returns Zero and 84/100', () => {
    assert.deepEqual(string_this_float(0.84), 'Zero and 84/100 dollars')
  })
  it('returns Fifty two and 00/100 dollars', () => {
    assert.deepEqual(string_this_float(51.999), 'Fifty-two and 00/100 dollars')
  })
});
