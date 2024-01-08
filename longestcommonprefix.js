// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// // work in progress
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) {
//     return "";
//   }
//   if (strs.length === 1) {
//     return strs[0];
//   }
//   let prefix = "";

//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 0; j < strs.length; j++) {
//       if (strs[j][i] === strs[0][i]) {
//         continue;
//       } else {
//         return prefix;
//       }
//     }
//     prefix += strs[0][i];
//   }

//   return prefix;
// };

let strs = ["flower","flow","flight"]
var longestCommonPrefix = function (strs) {
  let sorted = strs.sort((x,y) => y < x ? 1 : - 1)
  let left = sorted[0]
  let right = sorted[sorted.length - 1]
  let prefix = ""
  for (let i = 0; i < sorted.length; i++){
    if (left[i] === right[i]) {
        prefix += left[i]
    } else {
      break; 
      }
  }
  return prefix; 
  
};

console.log(longestCommonPrefix(strs))


