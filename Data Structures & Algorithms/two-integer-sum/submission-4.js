class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++){
            const num = nums[i];
            const complement = map.get(target-num)
            if(complement !== undefined){
                return [complement, i]
            }
            map.set(num, i)
        }
        return []
    }
}
