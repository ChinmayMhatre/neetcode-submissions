class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = new Map()
        for (let i = 0; i< nums.length;i++ ){
            const complement = target - nums[i]
            if(indexMap.has(complement)){
                return [indexMap.get(complement),i]
            }
            indexMap.set(nums[i],i)
        }
        return res
    }
}
