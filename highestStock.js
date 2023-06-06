let prices = [7,1,5,3,6,4]


var maxProfit = function(prices) {
    let sell = 0
    let cost = 0
    for (let i = 0; i < prices.length; i++){
        sell = prices[i]
    }
    for (let j = prices.length - 1; j >= 0; j--){
        cost = prices[j]
    }
    let profit = cost - sell
    console.log(profit)
};

console.log(maxProfit(prices))

