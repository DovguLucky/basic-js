const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let newObj = {};
  let defaultObj = {
    'repeatTimes': '1',
    'separator': '+',
    'addition': '',
    'additionRepeatTimes': '1',
    'additionSeparator': '|'
  }

  if (!options) {
    newObj = defaultObj
  } else {
    for(let key in defaultObj ){
      typeof options[`${key}`]  !== "undefined" ? 
      newObj[`${key}`] = options[`${key}`]:
      newObj[`${key}`] = defaultObj[`${key}`]
    }
  }
  let adition = new Array(Number(newObj.additionRepeatTimes))
  adition.fill(`${newObj.addition}`)
  adition = adition.join(`${newObj.additionSeparator}`)

  let arr = new Array(Number(newObj.repeatTimes));
  arr.fill(String(str) + String(adition))
  let res = arr.join(`${newObj.separator}`);
  return res
}

module.exports = {
  repeater
};