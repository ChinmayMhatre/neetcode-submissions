class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let freq = new Map()
        let l = 0
        let max = 0
        for(let r = 0 ; r < fruits.length; r++){
            freq.set(fruits[r], (freq.get(fruits[r]) || 0) + 1)
            while(freq.size > 2){
                freq.set(fruits[l], freq.get(fruits[l]) - 1)
                if(freq.get(fruits[l]) === 0)
                    freq.delete(fruits[l])
                l++
            }
            max = Math.max(max, r - l + 1)
        }
        return max
    }
}