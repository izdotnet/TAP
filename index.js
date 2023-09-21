const findMissingNumber = (nums) => {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = nums.reduce((acc, num) => acc + num, 0);
  return totalSum - arraySum;
};

// Tests
console.log(findMissingNumber([3, 0, 1])); // Should return 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Should return 8
console.log(findMissingNumber([0, 1])); // Should return 2
