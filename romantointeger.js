
// edge cases 
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// test cases 
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};


// work in progress 

var romanToInt = function(s) { 
   let arr = [];
 for (let i = 0; i < s.length; i++){
     if (romanNumerals[s[i]] < romanNumerals[s[i + 1]] ){
       arr.push(romanNumerals[s[i + 1]] - romanNumerals[s[i]])
          i++;
          continue;
     } else {
       arr.push(romanNumerals[s[i]])
     }
 }
  const check =arr.reduce((x,y) => x + y)
  return check; 
 };
 
 
 console.log(romanToInt('II'));
 























