const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr){
  let newArr = [];
  let notNumber = [];
  notNumber = arr.filter(el => el !== -1).sort((a,b) => a-b);
  arr.forEach((el,ind) => {
  if(el === -1){
    newArr.push(-1)
  }else{
    newArr[ind] = notNumber.shift()
  }
  })
  return newArr
}

module.exports = {
  sortByHeight
};
