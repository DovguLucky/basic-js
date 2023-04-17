const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( /* n */ ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {

  getSumOfDigits(n) {
    let sum = 0;
    let res;

    function red(numb) {
      sum = 0;
      let arr = [];
      let str = String(numb)
      arr = str.split('');
      arr.forEach(el => {
        sum += Number(el);
      })
      if (String(sum).split('').length > 1) {
        red(sum)
      }
    }
    red(n)
    return sum
  }
};