// solution passed 
// Level: easy 
var singleNumber = function(nums) {
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

