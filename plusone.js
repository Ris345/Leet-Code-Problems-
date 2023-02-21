// You are given a large integer represented as an integer array digits,
//where each digits[i] is the ith digit of the integer.The digits are ordered from most significant to least
//significant in left - to - right order.The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

//
var plusOne = function (digits) {
  debugger;
  // reversed for loop
  // we want to only increment the first number
  // then we want to return that result
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits.length > 1) {
      const newNum = digits[digits.length - 1] + 1;
      // remove that last digit from the digits array
      // then push the number into the array
      digits.pop();
      digits.push(newNum);
      break;
    } else {
      const newNums = digits[i] + 1;
      digits.pop();
      digits.push(newNums);
      break;
    }
  }
  return digits.length > 1 ? digits: digits.toString().split(''); 
};

console.log(plusOne([9]));
