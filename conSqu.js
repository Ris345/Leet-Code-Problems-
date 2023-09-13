var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0 
    let setOfnums = new Set(nums); 
    let starters = []; 
    let tempCount = 1; 
    let longestCount = 1; 

    for (const key of setOfnums.keys()){
      if (!setOfnums.has(key -  1)){
        starters.push(key)
      }
    }

//  starters 
for (let starter of starters){
 let breaker = true 
 while (breaker){
   if (setOfnums.has(starter + 1)){
       tempCount++
       longestCount = Math.max(longestCount, tempCount); 
       starter +=1
   } else {
     tempCount = 1; 
     breaker = false; 
   }
 }
}
return longestCount; 
};



var longestConsecutive = function(nums) {
    //  it's a sequence if there is now number before the number 
    let tempCount = 1 
    let starters = []
    let longestCount = 1

    let setOfnums = new Set(nums); 

    for (const key of setOfnums.keys()){
        if (!setOfnums.has(key - 1)) {
           starters.push(key)
       }
    }
    
    for (let starter of starters) {
        let breaker = true;
        while (breaker) {
            if (setOfnums.has(key + 1)) {
                tempCount++
            }
        }
    }

};


var longestConsecutive = function(nums) {
    let starters = []
    let tempCount = 1 
    let longestCount = 1 
    let setOfnums = new Set(nums); 

    for (let key of setOfnums.keys()) {
        if (!setOfnums.has(key - 1)) {
            starters.push(key)
        }
    }

    for (let starter of starters) {
        let breaker = true 
        while (breaker) {
            if (setOfnums.has(key + 1)) {
                tempCount++
                longestCount++
            }
        }
    }
    return longestCount; 

};















