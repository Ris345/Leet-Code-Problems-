
let nums = [-1, 0, 1, 2, -1, -4]; 

var threeSum = function (nums) {
    // if  the first triplet !== second triplet then return the group of trilpets that return triplets == 0
    nums.sort((x,y) => x - y)
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        left++
        right++
    }

    return nums;     

};


console.log(threeSum(nums)); 