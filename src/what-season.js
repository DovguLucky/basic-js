const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
  let spring = [3, 4, 2];
  let summer = [6, 7, 5];
  let autumn = [9, 10, 8];
  let winter = [0, 1, 11];
  let res = '';

  if (!isNaN(Date.parse(data)) && data.getDate() <= 31) {
    data.getMonth() === 1 && data.getDate() > 28 ?
      res = "Invalid date!" :
      (spring.includes(data.getMonth()) || String(data) === 'spring') ?
      res = 'spring' :
      (summer.includes(data.getMonth()) || String(data) === 'summer') ?
      res = 'summer' :
      (autumn.includes(data.getMonth()) || String(data) === 'autumn') ?
      res = 'autumn' :
      (winter.includes(data.getMonth()) || String(data) === 'winter') ?
      res = 'winter' :
      res = 'Invalid date!';
  } else {
    res = 'Unable to determine the time of year!';
  }
  return res;

}

module.exports = {
  getSeason

};