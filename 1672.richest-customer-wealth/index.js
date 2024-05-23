/**
 * @param {number[][]} accounts
 * @return {number}
 */

const maximumWealth = function (accounts) {
  let maxWealthSoFar = 0;
  for (let customer of accounts) {
    let currentCustomerWealth = 0;
    for (let bank of customer) {
      currentCustomerWealth += bank;
    }
    console.log(currentCustomerWealth);
    maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth);
  }
  return maxWealthSoFar;
};
