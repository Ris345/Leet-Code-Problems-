





const  nums = [1,2,3,4]

// var productExceptSelf = function (nums) {
//     debugger; 
//     let right = 1 
//     let left = 1 
//     let arr = []
//     for (let i = 0; i < nums.length; i++) { 
//         arr.push(right)
//         right *= nums[i]
//         console.log(right)
//     }
//     for (let j = nums.length - 1; j >= 0; j--) { 
//         arr[j] *= left 
//         left *= nums[j]
//         console.log(left)
//     }
//     return arr; 
// };

// console.log(productExceptSelf(nums))




var productExceptSelf = function(nums) {
    let left = 1
    let right = 1
    let arr = []
    for (let i = 0; i < nums.length; i++) { 
        arr.push(right)
        console.log('arr', arr)
        right *= nums[i]
        console.log('right', right)
    } 
    for (let j = nums.length - 1; j >= 0; j--) { 
        arr[j] *= left 
        console.log('arr', arr)
        left *= nums[j] 
        console.log('left', left)
    }
    return arr;
};

console.log(productExceptSelf(nums))