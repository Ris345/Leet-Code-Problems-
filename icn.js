let nums = [100, 4, 200, 1, 3, 2];

// var longestConsecutive = function (nums) {
//   // unsorted nums array 
//   // if there is no number infront that's smaller than the intial number then it is a start of the sequence
//   // else it is not a sequence
//   if (nums.length === 0) return 0; 
//   const nums_container = new Set(nums)
//   let starters = []; 
//   let tempCount = 1;
//   let longestCount = 1; 
//   for (const key of nums_container.keys()) {
//     if (!nums_container.has(key - 1)) {
//       starters.push(key)
//     }
//   }
  
//   for (let starter of starters) {
//     let breaker = true; 
//     while (breaker) {
//       if (nums_container.has(starter + 1)) {
//         tempCount++; 
//         longestCount = Math.max(longestCount, tempCount)
//         starter++
//       } else {
//         tempCount = 1
//         breaker = false
//       }
//     }
//   }
// return longestCount
// };

// console.log(longestConsecutive(nums));





var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0; 
  const number_set = new Set(nums); 
  let start_numbers = []
  let count = 1
  let tempCount = 1
  for (const key of number_set.keys()) {
    if (!number_set.has(key - 1)) {
      start_numbers.push(key)
    }
  }
  for (let start_number of start_numbers) {
    let breaker = true 
    if (start_numbers.has(start_number + 1)) {
      tempCount++
      longestCount = Math.max(longestCount, tempCount)
      start_numbers++
    } else {
      tempCount = 1
      breaker = false 
    }
  }
  return longestCount
};

console.log(longestConsecutive(nums))