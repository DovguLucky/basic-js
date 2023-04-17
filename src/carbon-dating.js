const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(c14) {
  let res = 0;

  if (typeof c14 === 'string') {
  let sampleActivity = Number(c14)
  console.log(sampleActivity)
  let HALF_LIFE_PERIOD = 5.73 * (10 ** 3);
  let MODERN_ACTIVITY = 0.693;
  let res = (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / Math.log(2);
      // res = Math.floor((0.3142 * (15.63 / sampleActivity)) / (MODERN_ACTIVITY / HALF_LIFE_PERIOD))
  }else{
    res=false;
  }
  return res
}

module.exports = {
   dateSample   
};
