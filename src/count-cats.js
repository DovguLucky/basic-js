const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
    let res = 0;

    function reduce(arr) {
        arr.forEach(el => {
            if (el === "^^") {
                res++
            } else if (Array.isArray(el)) {
                reduce(el)
            }
        })
    }
    reduce(arr)
    return res;
}

module.exports = {
    countCats
};