const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason (springDate)  {
  if(!arguments.length) {return 'Unable to determine the time of year!'}
  if (Object.getOwnPropertyNames(springDate).length > 0 || !springDate.getTime){
    throw new Error('Invalid date!');
  } 
  const season = {'0': 'winter', '4': 'winter', '1': 'spring', '2': 'summer','3': 'autumn',};
  const numberOfSeason = Math.floor((springDate.getMonth() + 1)/3);
  return season[numberOfSeason];
};
// function getSeason(/* date */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  getSeason
};
