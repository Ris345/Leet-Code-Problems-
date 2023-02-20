// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
// return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// solution passed
var searchInsert = function (nums, target) {
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
      break;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      nums.push(target);
      nums.sort((x, y) => x - y);
      return nums.indexOf(target);
    }
  }
};

const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 2));
