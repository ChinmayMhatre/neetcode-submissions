class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let row = 0
        let pending = n
        while(pending > row){
            row++
            pending = pending - row
        }

        return row
    }
}
