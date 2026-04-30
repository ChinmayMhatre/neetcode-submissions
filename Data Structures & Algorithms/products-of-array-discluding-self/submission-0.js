class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preArray = []
        let prefix = 1
        for(let i in nums){
            preArray[i]= prefix
            prefix *= nums[i]
        }

        const postArray = []
        let postfix = 1
        for (let i = nums.length - 1 ; i >= 0 ; i--){
            preArray[i] *= postfix
            postfix *= nums[i]
        }
        return preArray
    }
}
