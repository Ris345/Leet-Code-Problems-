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
  debugger;
  let obj = {};
  // iterate through each item
  //  if the index of the item is not the same as the previous item then item is not unique
  for (let i = 0; i < s.length; i++) {
    //  keep track of where the item is getting stored in the index
    console.log(s[i], i);
    // if the previous index of the item is not equal to new index then the item does not exist
    if (prevIdx != newIdx) {
      //  then item is unqiue
    } else {
      // item is not unique
    }
  }
};

console.log(firstUniqeChar(s));
