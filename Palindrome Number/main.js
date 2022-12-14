/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") == x;
};
