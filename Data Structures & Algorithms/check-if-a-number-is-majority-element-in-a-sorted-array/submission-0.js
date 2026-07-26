class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    isMajorityElement(nums, target) {
        let check = nums.length / 2
        let freq = 0
        for(let i = 0; i<=nums.length-1;i++){
            if(nums[i]== target){
                freq++
            }
           
        }
        console.log(freq)
        console.log(check)
         if(freq > check){
                return true
            }else {
                return false
            }
    }
}
