const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = (arr) => {
  if(!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!");}
  const markerArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const marker = {
  '--discard-next': (_, i, arr) => {arr[i+1] ? (arr[i+1] = null, arr[i] = null) : arr[i] = null},
  '--discard-prev': (_, i, arr) => {arr[i-1] ? (arr[i-1] = null, arr[i] = null) : arr[i] = null},
  '--double-next': (_, i, arr) => {arr[i+1] ? arr[i] = arr[i+1] : arr[i] = null;},
  '--double-prev': (_, i, arr) => {arr[i-1] ? arr[i] = arr[i-1] : arr[i] = null;},
};
  const clonedArr = arr.slice();
clonedArr.forEach((elem, i, arr) => { if(markerArr.includes(elem)) marker[arr[i]](elem, i, arr)});

  return  clonedArr.filter(el=>el !== null);
};

module.exports = {
  transform
};
