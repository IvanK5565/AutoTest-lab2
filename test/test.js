var assert = require('assert');
const mm = require('../MyMatrix.js');

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
      assert.ok(mm.equal(m1,m2))
    })
  })
});