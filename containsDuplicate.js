// solved with O(n2) time complexity 
var containsDuplicate = function (nums) {
    debugger; 
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++){
            if (nums[i] === nums[j]) {
                return true
            }
        }
        return false 
    }
};

// O(n) solution 
var containsDuplicate = function (nums) {
    debugger; 
    let obj = {}
    for (let i = 0; i < nums.length; i++){
        if (obj[nums[i]]) {
            obj[nums[i]] += 1
        } else {
            obj[nums[i]] = 1
         }
    }  
    let values = (Object.values(obj))   
    if ( Math.max(...values) > 1) {
        return true
    } 
    return false  
};


