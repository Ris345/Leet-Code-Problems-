// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//  test cases: Input: nums = [3,2,3]
// Output: 3


// work in progress 
var majorityElement = function (nums) {
    // declare an empty object 
    let similarNum = {};
    let sameNum = 0
       debugger; 
       // nested loops i and j loops 
        // if items similar then return the index 
          // return the number that is occuring most frequently 
        for (let i = 0; i < nums.length; i++){   //O(n)
          // for edge cases return the if index 0 item 
          if(nums.length === 1){
            return nums[i]
            // go along with the next loop 
          } else {
              for(let j = i + 1; j < nums.length; j++){   //O(n)
                // numbers are equal to each other and their length in the array is greater than the other number return 
             if(nums[i] === nums[j]) {
                 sameNum = nums[i]
                 console.log(sameNum)
                 similarNum[nums[i]] = i
             } 
           }
         }
      }
    // console.log(similarNum)
    for (let key in similarNum){  // O(n)
     return similarNum;
      //  return the num with highest frequency 
       // 
    }
  };
  
  
  