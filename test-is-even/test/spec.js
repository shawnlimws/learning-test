var assert = require('assert')
var isEven = require('..')

describe('isEven', function () {
  it('checks that a number is even', function () {
    var even = Math.round(Math.random() * 1000) * 2
    assert(isEven(even))
  })
  it('checks that a number is odd', function () {
    var odd = Math.round(Math.random() * 1000) * 2 + 1
    assert(!isEven(odd))
  })
  it('fails when a string is passed', function () {
    try {
      isEven('abc')
      assert.fail()
    } catch (error) {
      assert(error.message === 'must be a number')
    }
  })
  it('fails when a non-number is passed', function () {
    try {
      isEven(null)
      assert.fail()
    } catch (error) {
      assert(error.message === 'must be a number')
    }
  })
  it('fails when nothin is passed', function () {
    try {
      isEven()
      assert.fail()
    } catch (error) {
      assert(error.message === 'must be a number')
    }
  })
})
