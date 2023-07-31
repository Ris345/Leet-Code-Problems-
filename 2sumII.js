
// const numbers = [2,3,4]

// var twoSum = function (numbers, target) {
//     debugger; 
//     // two pointer approach 
//     // decalre a left and right variable
//     // while left < right keep adding until it finds the target
//     // once target found return the index of the sum of the numbers
//     let left = 0
//     let sum = 0
//     let right = numbers.length - 1
//     while (left < right) {
//         numbers[left]++
//         sum = numbers[left] + numbers[right]
//     }
//     console.log(sum)
// };


// console.log(twoSum(numbers,6))

const numbers = [2,3,4]
// var twoSum = function(numbers, target) {
//     // two pointer approach 
//     // decalre a left and right variable
//     // while left < right keep adding until it finds the target
//     // once target found return the index of the sum of the numbers
//     let left = 0
//     let right = numbers.length - 1
//     let sum = 0

//     while (left < right) {
//         sum = numbers[left] + numbers[right]
//         if (left < right) {
//             return [left + 1, right + 1]
//         } else if (left > right) {
//             left--
//         } else {
//             right++
//         }
//     }
// };


// console.log(twoSum(numbers, 6))



var twoSum = function (numbers, target) {
    debugger; 
    // two pointer approach 
    // decalre a left and right variable
    // while left < right keep adding until it finds the target
    // once target found return the index of the sum of the numbers 
    let left = 0
    let right = numbers.length - 1
    let sum = 0
    while (left < right) {
        sum = numbers[left] + numbers[right]
        if (sum === target) {
            return[left + 1, right + 1]
        } else if (right > left) {
            right--
        } else {
            left++
        }
    }
};

console.log(twoSum(numbers, 6))