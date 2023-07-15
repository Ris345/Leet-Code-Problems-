// let nums = [2,3,1,1,4]

// var jump = function (nums) {
//     debugger;
//     // we start at zero index nums[0]
//     //  last elem n - 1
//     // to jump to the last index i can use i + j
//     let n = nums.length
//     let j = 0
//     for (let i = 0; i < n; i++){
//         for (let j = 0; j < n; j++){
//             let jump = nums[i + j]
//             if (jump === nums[n - 1]) {
//                 console.log(nums[i])
//             }
//         }
//     }
// };

// console.log(jump(nums))

let nums = [2, 3, 1, 1, 4];

var jump = function (nums) {
  debugger;
  let jump = 0;
  let curr = 0;
  let max = 0;
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === curr) {
      jump++;
      curr = max;
    }
  }
  return jump;
};

console.log(jump(nums));
