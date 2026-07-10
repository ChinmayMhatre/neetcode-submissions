class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let num in nums){
            const complement = target - nums[num] 
            if(map.has(complement)){
                return [Number(num), Number(map.get(complement))]
            }
            map.set(nums[num],num)
        }
        return []
    }
}
