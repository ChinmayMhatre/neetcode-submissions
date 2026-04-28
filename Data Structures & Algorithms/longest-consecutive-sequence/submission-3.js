class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const sorted = nums.sort((a,b)=> a-b)
        let maxSequence = 1
        let currentSequence = 1
        for (let i = 0 ; i < nums.length - 1; i++){
            if(sorted[i+1] === (sorted[i]+1)){
                currentSequence++
            } else if (sorted[i+1] !== sorted[i]){
                currentSequence = 1
            }
            maxSequence = Math.max(maxSequence, currentSequence)
        }
        return maxSequence
    }
}
