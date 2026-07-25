class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count_map = new Map()
        count_map.set(0,1)
        let count = 0
        let sum = 0
        for(let num of nums){
            sum = sum + num
            let target = sum - k
            if(count_map.has(target)){
                count = count + count_map.get(target)
            }
            count_map.set(sum,(count_map.get(sum) || 0 )+ 1)
        }
        return count
    }
}
