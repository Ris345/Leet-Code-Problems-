// time complexity O(n2) ---> not good 
 
let nums = [3, 2, 4], target = 6
var twoSum = function(nums, target) {
  debugger;
  let sum = 0
  let arr = []
//     iterate through each item 
//    run another for loop i + 1 to get the second value 
//   if that sum == target return target
  for(let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      sum = nums[i] + nums[j]
      if (sum == target){
        arr.push(i, j)
      }
     }
  }
  return arr
};
console.log(twoSum(nums,target))





// using hash maps 
//  time complexity O(n)
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i]
    if (obj.hasOwnProperty(sum)) {
      return [obj[sum], i]
    } else {
      obj[nums[i]] = i;
    }
  }
};

console.log(twoSum(nums,target))






var twoSum = function (nums, target) { 
  let obj = {}
  for (let i = 0; i < nums.length; i++) { 
    let sum = target - nums[i]
    if (obj.hasOwnProperty(sum)) {
      return [obj[sum], i]
    } else {
        obj[nums[i]] = i 
    }
  }
}


var twoSum = function (nums, target) { 
  let obj = {}
  for (let i = 0; i < nums.length; i++) { 
    let sum = target - nums[i]
    if (obj.hasOwnProperty(sum)) { 
       return [obj[num], i]
    } else {
      obj[nums[i]] = i
    }
  }
}

var twoSum = function (nums, target) { 
  let obj = {}
  for (let i = 0; i < nums.length; i++) { 
    let sum = target = nums[i]
    if (obj.hasOwnProperty(sum)) {
      return [obj[num], i]
    } else {
      obj[nums[i]] = i
    }
  }
}



// two sum two pointer method 
const two_sum = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  let sum = 0
  while (left < right) {
    sum = nums[left] + nums[right]
    if (sum === target) {
      return true 
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return false; 
}









