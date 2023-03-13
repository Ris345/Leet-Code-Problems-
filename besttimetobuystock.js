
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// 


const  prices = [7,1,5,3,6,4]
var maxProfit = function (prices) {
  let arr = []; 
  debugger; 
  // run a for loop iterating over each item in the array 
   //  choose a day to buy and a day to sell the stock 
     // run a for loop 
       for (let i = 0; i < prices.length; i++){
          for (let j = 0; j < prices.length - 1; j++){
             const highNum = prices[i] - prices[j + 1]
             arr.push(highNum)
            let largeNum = (Math.max(...arr)) - 1
           return largeNum;      
          }     
     } 
};


