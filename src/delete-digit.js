const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit(number) {
    // let arr = []
    let memory = 0;
    let index = 0;
    arr = String(number).split('')
    for (let i = 0; i < arr.length; i++) {
        let arr = String(number).split('');
        let w = arr.splice(i, 1);
        let newNumb = Number(arr.join(''));
        if (newNumb > memory ){
            memory = newNumb
            index = i;
        }
    }
    console.log(memory)
    return memory
}
};
