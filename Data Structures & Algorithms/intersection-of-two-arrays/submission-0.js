class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let ans = new Set()
        
       const set = new Set(nums1);
        for(let i = 0 ; i< nums2.length; i++){
            if(set.has(nums2[i])){
            ans.add(nums2[i])
            }
        }
         
        
        return Array.from(ans)
    }
}
