var assert = require('assert');
const { equal }  = require('../MyMatrix.js');

describe('MyMatrix', function () {
  describe("compare", function () {
    m1 = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    m2 = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    it('must be equal', function(){
      assert.ok(equal(m1,m2))
    })
    m3 = [
      [1,0,0],
      [0,0,0],
      [0,0,0]
    ]
    it('must not be equal', function(){
      assert.ok(false == equal(m1,m3))
    })
  })
});