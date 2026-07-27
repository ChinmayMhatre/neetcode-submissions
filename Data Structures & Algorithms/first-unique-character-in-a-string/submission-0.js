class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let freq = new Map()
        for(let char of s){
            freq.set(char,(freq.get(char)||0) + 1)
        }
        for(let ind in s){
            let val = freq.get(s[ind])
            if(val === 1){
                return ind
            }
        }
        return -1
    }
}
