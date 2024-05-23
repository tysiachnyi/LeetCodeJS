/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  return nums.reduce((pV, cV, i) => [...pV, (pV[i - 1] || 0) + cV], []);
};
