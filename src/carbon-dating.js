const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_TWO = 0.693;

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
function dateSample(sampleActivity) {
  const value = Math.ceil(+sampleActivity);
  if(isNaN(value)||value <= 0 || value > MODERN_ACTIVITY ||!Number.isInteger(value)){return false}
  const result = Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / parseFloat(value)) / LOG_TWO);
  if(result <= 0 ) {return false}

  return result;
};

module.exports = {
  dateSample
};
