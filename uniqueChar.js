s = "loveleetcode";
var firstUniqChar = function (s) {
  let str = "";
  debugger;
  // unique char repeats only once
  // keep track of each item in a obj
  // push it using a for loop
  // using brute force
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        str += s[i];
      }
    }
    return i;
  }
};

console.log(firstUniqChar(s));
