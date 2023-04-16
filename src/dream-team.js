const { NotImplementedError } = require('../extensions/index.js');

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
const createDreamTeam = (members) => {
  if(!Array.isArray(members)){return false;}
  const result = members.filter((el)=> typeof el === 'string' ).map((word)=> (word.trim())[0].toUpperCase()).sort().join('');
  if(!result.length){return false;}
  return result;
};

module.exports = {
  createDreamTeam
};
