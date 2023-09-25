/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function(s) {
    const counter = {}
    s.split('').forEach(char => counter[char]? counter[char]++ :  counter[char] = 1)
    return Object.values(counter).every(item => item === Object.values(counter)[0])
  };