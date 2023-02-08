// solution passed 

var singleNumber = function(nums) {
    debugger; 
    // nums has duplicate items 
     // items are duplicate if the indexes are not the same as the previous index
  let obj = {}; 
  for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
          obj[nums[i]] = 0
        }
    obj[nums[i]] += 1
     }
  for (let key in obj){
   if (obj[key] < 2){
     return key
   }
  }
};



console.log(singleNumber([1]));
console.log(singleNumber(2, 2, 1));
console.log(singleNumber([4, 1, 2, 1, 2])); 





 // for (let i = 0; i < nums.length; i++){
 //    for(let j =0; j < nums.length - 1; j++){
 //      if(nums[i] === nums[j + 1]){
 //        console.log(nums[i])
 //      }
 //    }
 // }

// return nums.filter(function (x,y){
//         return x
//     })

// it's better to use object because it keeps tracks of the key: value pairs that way we can find the frequency of each number. 























