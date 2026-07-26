class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    isMajorityElement(nums, target) {
        let l = 0 
        let r = nums.length - 1
        while(l<r){
            let mid = Math.floor((l + r) / 2)
            if (nums[mid] >= target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        } 

        
        let index = l + Math.floor(nums.length / 2)

        return index < nums.length && nums[index] === target;
    }
}
