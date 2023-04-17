const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( /* arr */ ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
  // (arr) {
  //   let res;
  //   let swich = "off"
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if(typeof arr[i] === "number"){
  //       newArr.push(arr[i])
  //     }else if (arr[i] === "--discard-next") {
  //       i === arr.length - 1 ?
  //         swich = "on" :
  //         i++;
  //     } else if (arr[i] === "--discard-prev") {
  //       i === 0 ?
  //         swich = "on" :
  //         newArr.pop();
  //     } else if (arr[i] === "--double-next") {
  //       i === arr.length - 1 ?
  //         swich = "on" :
  //         newArr.push(arr[i + 1]);
  //     } else if (arr[i] === "--double-prev") {
  //       i === 0 ?
  //         swich = "on" :
  //         newArr.push(arr[i - 1]);
  //     }
  //   }
  //   swich === "on" ?
  //     res = "'arr' parameter must be an instance of the Array!" :
  //     res = newArr;

  //     return res
  // }
};