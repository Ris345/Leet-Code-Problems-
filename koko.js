const piles = [3,6,7,11] 


var minEatingSpeed = function (piles, h) {
    debugger; 
// k bananas piles[i] = k 
     // h = 8
    // piles.length =< h
    //  koko can only eat one pile per hour
    // 3 / 1 = 3 ...3 hours to eat the first pile
    //  k is going to be the max number in the pile
    // potential k = [1,2,3,4,5,6,7,8,9,10,11]
    // average = 1 + 11 / 2 = 6
    // math.max(piles) = 11

    let left = 1
    let right = (Math.max(...piles))
    let res = right 
    let hours = 0
    while (left <= right) {
        k = (1 + right) / 2
        for (let i = 0; i < piles.length; i++){
            hours += Math.round(piles[i] / k)
            if (hours <= h) {
                res = Math.min(res, k)
                right = k - 1
            } else {
                left  = k + 1
            }
        }
        return res; 
    }
};

console.log(minEatingSpeed(piles,8))



var minEatingSpeed = function(piles, h) {
    let left = 1 
    let right = Math.max(...piles);
    let mid = Math.floor((left + right) / 2);
    let k = Infinity 
 
    while (left <= right){
        let sum = 0
 
        for (let i = 0; i < piles.length; i++){
            sum = sum + Math.ceil(piles[i] / mid);
        }
        
        if (sum <= h){
            k = Math.min(k, mid)
            right = mid - 1
            mid = Math.floor((left + right ) / 2)
        } else {
            left = mid + 1
            mid = Math.floor((left + right) / 2)
        }
 
    }
 
     return k; 
 };