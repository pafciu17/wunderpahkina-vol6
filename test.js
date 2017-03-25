const assert = require('assert');
const { calculateSquareAreaStartingAtIndex0 } = require('./utils')

describe('Utils', () => {
  describe('calculateSquareAreaStartingAtIndex0', () => {
    it('should return area of biggest square starting from the first element of the input array', function() {
      assert.equal(calculateSquareAreaStartingAtIndex0([1, 2, 3]), 1)
      assert.equal(calculateSquareAreaStartingAtIndex0([100, 100, 100, 100]), 16)
      assert.equal(calculateSquareAreaStartingAtIndex0([5, 5, 5, 3, 100]), 9)
      assert.equal(calculateSquareAreaStartingAtIndex0([5, 2, 4, 5, 100, 200]), 4)
      assert.equal(calculateSquareAreaStartingAtIndex0([5, 0, 10, 10]), 1)
    });
  });
});
