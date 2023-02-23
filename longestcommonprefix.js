// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// work in progress
var longestCommonPrefix = function(strs) {
   // split the array trim all the extra space 
     // filter and remove and extra white space 
    // loop through the modified array
     // check if each item in the array is equal to the second item like this [i] = [i + 1] 
    const item = strs.toString().trim().split('');
    const modifiedArr = item.filter((x) => {
      return x !== ","; 
    })
    for (let i = 0; i < modifiedArr.length; i++){
        for (let j = 0; j < modifiedArr.length; j++){
            if (modifiedArr[i] === modifiedArr[j + 1]) {
                return modifiedArr[i]; 
            }
        }
    }
};
