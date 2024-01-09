// Input: haystack = "sadbutsad", needle = "sad"


// passed first two test cases 


let test = []
var strStr = function (haystack, needle) {
  debugger;
  // if the word of needle is found in haystack return needle indexes of where the needle occurs
  // split the needle such that it can be iterated
  // check if needle === in haystack return the index + 1 location

    let change_haystack = haystack.split('');
    let change_needle = needle.split('')
  //loop through the haystack
    for (let i = 0; i < change_haystack.length; i++){
        // should only return true if all the items in the array are true; 
        // bug is right here
        // compapre everyword from the needle to the haystack 
        
        if (change_haystack[i] === change_needle[i]) {
            test.push(i) 
        } 
        
    } 
    return change_needle.length === test.length ? test[0] : -1; 
};

console.log(strStr("leetcode", "leeto"))
