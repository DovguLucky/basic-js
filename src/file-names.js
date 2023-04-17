const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
    let newArr = arr;
    let count = 1;

    function repeat(res) {
        for (let j = 1; j < arr.length; j++) {
            if (res.includes(res[j - 1], j)) {
                if (res.indexOf(res[j - 1], j)) {
                    let ind = res.indexOf(res[j - 1], j);
                    res[ind] = `${res[ind]}(${count})`
                    count++;
                    repeat(res)
                }
            }
            count = 1;
        }
    }
    repeat(newArr)
    return newArr
}

module.exports = {
    renameFiles
};