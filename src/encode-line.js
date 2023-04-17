const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let newArr = str.split('')
    let count = 1;
    let res = []

    for (let i = 1; i < newArr.length; i++) {
        if (i === newArr.length - 1 && newArr[i] === newArr[i - 1]) {
            count++;
            res.push(`${count}${newArr[i]}`)
        } else if (i === newArr.length - 1 && newArr[i] !== newArr[i - 1]) {
            count === 1 ?
                res.push(newArr[i - 1]) :
                res.push(`${count}${newArr[i-1]}`)
            count = 1;
            res.push(newArr[i])
            count = 1;
        } else if (newArr[i] === newArr[i - 1]) {
            count++;
        } else {
            count === 1 ?
                res.push(newArr[i - 1]) :
                res.push(`${count}${newArr[i-1]}`)
            count = 1;
        }
    }
    return res.join("")
}

module.exports = {
    encodeLine
};