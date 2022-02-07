// const data = [1, 2, 3, 4, 5, 1];
// const data = [1, 2, 3, 3, 4, 1];
const data = [1, 2, 3, 4, 1];

const containsDuplicate = (nums) => {
  const newNums = [];
  let result;

  for (const num of nums) {
    if (newNums.includes(num)) {
      result = true;
      break;
    }
    newNums.push(num);
    result = false;
  }

  return result;
};

// containsDuplicate(data)
console.log(containsDuplicate(data));
