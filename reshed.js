

// trying to solve it without sorting!! 

var topKFrequent = function (nums, k) {
    debugger;
    let tracker = {}
    let output = []
    for (let i = 0; i < nums.length; i++){
        if (tracker[nums[i]]){
            tracker[nums[i]] += 1
        } else {
            tracker[nums[i]] = 1 
        }
    }
    for (let key in tracker) {
        console.log(key)
        // if the length of the array  matches the k length then return output
        //  other wise contiinue pushing values until the length is reached
        // but k is also the most repeated item
        if (k === output.length) {
            if (k === nums.length) {
                return output
            } 
        return output 
        } else if (output.length < k) {
            if (tracker[key] > 1) {
                output.push(key)
            } 
        } 
    }
    return output; 
};


console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))