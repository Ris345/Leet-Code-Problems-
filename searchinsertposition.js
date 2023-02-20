// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, 
// return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
     // loop through the nums array 
      // if target === nums[i]
       // return index of nums
    // else
         // if the target number is not in the nums arr then we need to find a index for the target number to fit
          // the target number must be greater or smaller than the last number in the array 
           // if we know the last number is greater than the target then we can place it in the last index 
             // else other wise we would have to check for every iteration until we find the number that is smaller than the target 
};