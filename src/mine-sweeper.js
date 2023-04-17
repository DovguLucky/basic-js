const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(allArr) {
  let newArr = [];
  for (let i = 0; i < allArr.length; i++) {
    newArr.push(new Array(allArr[i].length).fill(0))
    for (let j = 0; j < allArr[0].length; j++) {
      if (allArr[i][j] === true) {
        if (j === 0) {
          newArr[i][j + 1]++;
        } else if (j === allArr[i].length - 1) {
          newArr[i][j - 1]++;
        } else {
          newArr[i][j - 1]++;
          newArr[i][j + 1]++;

        }
      }
    }
  }
  for (let j = 0; j < allArr[0].length; j++) {
    for (let i = 0; i < allArr.length; i++) {
      if (allArr[i][j] === true) {
        if (i === 0) {
          newArr[i + 1][j]++;
        } else if (j === allArr.length - 1) {
          newArr[i - 1][j]++;
        } else {
          newArr[i - 1][j]++;
          newArr[i + 1][j]++;
        }
      }
    }
  }
  for (let i = 0; i < allArr.length; i++) {
    for (let j = 0; j < allArr[0].length; j++) {
      if (allArr[i][j] === true) {
        if (j === 0) {
          if (i === 0) {
            newArr[i + 1][j + 1]++;
          } else if (i === allArr.length - 1) {
            newArr[i - 1][j - 1]++;
          } else {
            newArr[i - 1][j + 1]++;
            newArr[i - 1][j + 1]++;
          }
        } else if (j === allArr[i].length - 1) {
          if (i === 0) {
            newArr[i + 1][j - 1]++;
          } else if (i === allArr.length - 1) {
            newArr[i - 1][j - 1]++;
          } else {
            newArr[i - 1][j - 1]++;
            newArr[i + 1][j - 1]++;
          }
        } else {
          if (i === 0) {
            newArr[i + 1][j + 1]++;
            newArr[i + 1][j - 1]++;
          } else if (i === allArr.length - 1) {
            newArr[i - 1][j - 1]++;
            newArr[i - 1][j + 1]++;
          } else {
            newArr[i + 1][j - 1]++;
            newArr[i + 1][j + 1]++;
            newArr[i - 1][j - 1]++;
            newArr[i - 1][j + 1]++;
          }
        }
      }
    }
  }
  return newArr
}

module.exports = {

  minesweeper
};