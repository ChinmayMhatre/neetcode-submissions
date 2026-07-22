class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let l = 0 
        for (let i = 1; i<prices.length; i++){
            if(prices[i] < prices[l]){
                l=i
            }else{
                let profit = prices[i] - prices[l]
                maxProfit = Math.max(profit,maxProfit)
            }
        }
        return maxProfit
    }
}
