class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0
        let l = 0
        let long = 1
        let map = new Set()
        for(let r = 0 ; r < s.length ; r++){
            while(map.has(s[r])){
                map.delete(s[l])
                l++
            }
            map.add(s[r])
            long = Math.max(long, r - l + 1)
        }
        return long
    }

}