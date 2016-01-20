var expect = require('chai').expect
var assert = require('assert')
var characterOccurenceCounter = require('..')

describe('characterOccurenceCounter', function () {
  it('checks that parameters are strings', function () {
    try {
      characterOccurenceCounter(null, null)
      assert.fail()
    } catch (error) {
      assert(error.message === 'must be a string')
    }
  })
  it('checks that number is correct', function () {
    assert(characterOccurenceCounter('hippo', 'p') === 2)
  })
})
