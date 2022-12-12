/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
