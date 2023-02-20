// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
// return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// work in progress
var searchInsert = function (nums, target) {
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    } else {
      if (target - nums[i] === 1) {
        if (target > nums[i]) {
          nums.push(target);
          return nums.indexOf(target);
        } else {
            // push the number with index 
        }
      }
    }
  }
    
};

const nums = [1, 3, 5, 6];

console.log(searchInsert(nums, 2));
