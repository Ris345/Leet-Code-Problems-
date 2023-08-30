// brute forcing the solution

let nums = [-1, 0, 1, 2, -1, -4];
// var threeSum = function (nums) {
//     debugger;
//     nums.sort((x, y) => x - y);
//     console.log('sorted_nums', nums);
//     const results = [];
//     for (let i = 0; i < nums.length; i++){
//         console.log( i, 'nums I idx:', nums[i]);
//         console.log(i-1, 'nums with i - 1', nums[i - 1])
//         if ( i > 0 && nums[i] == nums[i - 1]) continue;
//         for (let j = i + 1; j < nums.length; j++){
//             console.log(j, 'nums J idx:', nums[j]);
//             console.log(j - 1, 'nums with j - 1', nums[j - 1])
//             if (j > i + 1 && nums[j] == nums[j - 1]) continue;
//             for (let k = j + 1; k < nums.length; k++){
//                 console.log(k, 'nums K idx:', nums[k]);
//                 console.log(k - 1, 'nums with k - 1', nums[k - 1])
//                 if (k > j + 1 && nums[k] == nums[k - 1]) continue;
//                 if (nums[i] + nums[j] + nums[k] == 0) {
//                     results.push([nums[i], nums[j], nums[k]])
//                 }
//             }
//         }
//     }
//     return results;
// };

// console.log(threeSum(nums));

var threeSum = function (nums) {
  nums.sort((x, y) => x - y);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return results;
};

console.log(threeSum(nums));

var threeSum = function (nums) {
  nums.sort((x, y) => x - y);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] - nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return results;
};

// var threeSum = function (nums) {
//     // if  the first triplet !== second triplet then return the group of trilpets that return triplets == 0
//     nums.sort((x,y) => x - y)
//     let left = 0
//     let inner_arr = []
//     let right = nums.length - 1
//     while (left < right) {
//         inner_arr.push(nums[right])

//     }
//     return inner_arr;
// };

// console.log(threeSum(nums));
