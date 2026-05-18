class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyIndex = 0
        let maxProfit = 0
        for (let i = 1; i<prices.length;i++){
            if(prices[buyIndex]<prices[i]){
                let profit = prices[i]-prices[buyIndex]
                maxProfit = Math.max(maxProfit,profit)
            }
            if(prices[buyIndex]>prices[i]){
                buyIndex = i
            }
        }
        return maxProfit
    }
}
