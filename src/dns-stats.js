const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats(arr) {
    let resObj = {};
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(".").reverse())
        for (let j = 1; j <= newArr[i].length; j++) {
            let name = newArr[i].slice(0, j).join('.');
            let count = 1;
            if (!resObj[`.${name}`]) {
                resObj[`.${name}`] = count;
            } else if (resObj[`.${name}`]) {
                count = resObj[`.${name}`] + 1;
                resObj[`.${name}`] = count++;
                count = 1;
            }
        }
    }
    return resObj
}
};
