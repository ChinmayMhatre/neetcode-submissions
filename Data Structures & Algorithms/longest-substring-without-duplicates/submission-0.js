class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0
        let max = 0
        let dupe = new Map()
        let left = 0

        for (let i = 0 ; i < s.length ; i++){
            if(dupe.has(s[i]) && dupe.get(s[i]) >= left){
                left = dupe.get(s[i]) + 1
            }
            dupe.set(s[i], i)
            max = Math.max(max, i - left + 1)
        }
        return max

    }
}