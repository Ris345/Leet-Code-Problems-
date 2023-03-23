// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// step 1 the parameter needle consists of a value we are looking in haystack 
// step 2 if the value of needle item is in the haystack then return the index of that item 
// step 3 else return - 1




var strStr = function(haystack, needle) {
  debugger; 
  let arr = []
  let spltStr = haystack.split('')   
  console.log(spltStr)
  let spltStr2 = needle.split('')
  for (let i = 0; i < spltStr.length; i++){ //O(n)
    for(let j = 0; j < spltStr2.length; j++){ // O(n)
       if (spltStr[i] === spltStr2[j])  {
         // return Array.isArray(spltStr) ? spltStr.findIndex(spltStr[i]) : 'error';
         
       }
    }
  }
 return arr; 
};

//console.log(strStr("sadbutsad", 'sad'))






