// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//  test cases: Input: nums = [3,2,3]
// Output: 3

// var majorityElement = function (nums) {
//   // declare an empty object
//   let similarNum = {};
//      debugger;
//      // nested loops i and j loops
//       // if items similar then return the index
//         // return the number and pck that number into an object that is occuring most frequently
//       for (let i = 0; i < nums.length; i++){   //O(n)
//         // for edge cases return the if index 0 item
//         if(nums.length === 1){
//           return nums[i]
//           // go along with the next loop
//         } else {
//             for(let j = i + 1; j < nums.length; j++){   //O(n)
//               // numbers are equal to each other and their length in the array is greater than the other number return
//            if(nums[i] === nums[j]) {
//                similarNum[nums[i]] = i
//            }
//          }
//        }
//     }
// let valuesArr = Object.values(similarNum).filter(value => typeof value === "number");
//   return Math.max(...valuesArr)
// };

// console.log(majorityElement([2,2,1,1,1,2,2]));

var majorityElement = function (nums) {
  let obj = {};
  // run a regular for loop
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    // add that too the obj key:value
    obj[nums[i]] = i;
  }
  return obj;
};

console.log(majorityElement([3, 2, 3]));
