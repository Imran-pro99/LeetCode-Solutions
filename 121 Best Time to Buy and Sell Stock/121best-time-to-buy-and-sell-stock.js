/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }

        profit = prices[i] - minPrice;

        if(maxProfit < profit){
            maxProfit = profit;
        }
    }
    return maxProfit;
};