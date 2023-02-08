
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// test case 
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// work in  progress
var mySqrt = function (x) {
    // we need to find the square root of that number 
    const total = Math.floor(Math.sqrt(x)); 
    if (total > 2) {
        return total - 1
    } else {
        return total; 
    }
};



console.log(mySqrt(4))
