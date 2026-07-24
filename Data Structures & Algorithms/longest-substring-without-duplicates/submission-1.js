class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0 
        let ans = 0
        let freq = new Map()
        for (let i = 0; i < s.length; i++){

            if(freq.has(s[i])){
                if(freq.get(s[i]) >= l){
                    l = freq.get(s[i]) + 1
                }
            }
            freq.set(s[i], i)
            ans = Math.max(ans, i-l+1)
        }
        return ans
    }
}