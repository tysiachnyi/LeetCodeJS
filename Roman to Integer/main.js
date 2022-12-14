/**
 * @param {string} romanValue
 * @return {number}
 */

const romanToInt = function (romanValue) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  romanValue.split("").forEach((value, index) => {
    if (romanNumeralMap[value] < romanNumeralMap[romanValue[index + 1]]) {
      result -= romanNumeralMap[value];
    } else {
      result += romanNumeralMap[value];
    }
  });
  return result;
};
