
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// 


const  prices = [7,1,5,3,6,4] // 0(1)
var maxProfit = function (prices) {
  let profit  = 0; // 0(1)
  debugger; 
  // run a for loop iterating over each item in the array 
   //  choose a day to buy and a day to sell the stock 
     // run a for loop 
       for (let i = 0; i < prices.length - 1; i++){ // 0(n)
         for (let j = i + 1; j < prices.length; j++){ // 0(n)
            // check if [j] > [i]
             if (prices[j] > prices[i]){
               let generalProfit = prices[j] - prices[i]
               // check if generalProfit > profit 
             if (generalProfit > profit){
                profit = generalProfit 
              }
            }
          }     
     } 
  return profit; 
};
