const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('should run async test', function(done) {
      assert.equal(2, 1+1);
      done();
    });
  });
});