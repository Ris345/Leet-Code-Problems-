// s = "loveleetcode";
// var firstUniqChar = function (s) {
//   let str = "";
//   debugger;
//   // unique char repeats only once
//   // keep track of each item in a obj
//   // push it using a for loop
//   // using brute force
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 1; j < s.length; j++) {
//       if (s[i] === s[j]) {
//         str += s[i];
//       }
//     }
//     return i;
//   }
// };

// console.log(firstUniqChar(s));

s = "loveleetcode";
var firstUniqeChar = function (s) {
  let obj = {}
  for (let i = 0; i < s.length; i++){
    if (obj[s[i]]) {
      obj[s[i]] += 1
    } else {
      obj[s[i]] = 1
    }
    for (let j = 0; j < s.length; j++){
      if (obj[s[i]] < 2) {
        return i
      } 
    }
  }
  return - 1
};

console.log(firstUniqeChar(s));
