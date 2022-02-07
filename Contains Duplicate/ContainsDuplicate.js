const data = [1, 2, 3, 4, 1];

const containsDuplicate = (nums) => {
  const newNums = [1];
  let result;

  for (const num of nums) {
    if (newNums.includes(num)) {
      // console.log(true);
      result = true;
      break;
    }
    newNums.push(num);
    result = false;
    // console.log(false);
  }

  return result;
};
// containsDuplicate(data)
console.log(containsDuplicate(data));
