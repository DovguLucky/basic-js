const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let res = [];
  let arrUppLatter = [];
  if (Array.isArray(arr)) {
    arr.forEach(el => {
      if (typeof el === "string") {
        arrUppLatter.push(el.trim().split('')[0])
      }
    })
    arrUppLatter.forEach(e => {
      if (typeof e === "string") {
        res.push(e.toUpperCase())
      }
    })
    res = res.sort().join('');
  } else {
    res = false;
  }
  return res;
}

module.exports = {
  createDreamTeam
};