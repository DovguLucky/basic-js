const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr){
  let sum = 0;
  for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) {
          if (arr[j][i] === 0) {
              break
          } else {
              sum = sum + arr[j][i];
          }
      }
  }
  return sum ;
}

module.exports = {
  getMatrixElementsSum
};
