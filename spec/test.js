import assert from 'assert';
import expect from 'expect';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('should run async test', function(done) {
      expect(1+1).toEqual(2);
      done();
    });
  });
});