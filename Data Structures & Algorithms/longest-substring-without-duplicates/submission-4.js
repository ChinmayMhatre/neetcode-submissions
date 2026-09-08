class Solution {
    /**
     * @param {string}
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       if(s.length === 0) return 0
       let map = new Map()
       let l = 0
       let count = 0
       for(let i = 0 ; i<=s.length-1;i++){
        if(map.has(s[i]) && map.get(s[i]) >= l){
            l = map.get(s[i]) + 1
        }
        map.set(s[i], i)
        count = Math.max(count, i - l + 1)
       }
       return count
    }
}