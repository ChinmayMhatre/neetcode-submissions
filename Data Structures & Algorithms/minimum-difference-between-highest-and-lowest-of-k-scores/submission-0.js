class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        let sorted = nums.sort((a,b)=> a-b)
        let diff = sorted[k-1] - sorted[0]
        let best = diff
        for( let r = k ; r<nums.length ; r++){
        let diff = sorted[r] - sorted[r-k+1]
        best = Math.min(diff,best)

        }
        return best
    }
}