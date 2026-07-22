class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let l = prices[0] 
        for (let i = 1; i<prices.length; i++){
                let profit = prices[i] - l
                maxProfit = Math.max(profit,maxProfit)
                l = Math.min(l,prices[i])
        }
        return maxProfit
    }
}
