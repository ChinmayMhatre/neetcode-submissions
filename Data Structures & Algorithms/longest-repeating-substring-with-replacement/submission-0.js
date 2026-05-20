class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0
        let left = 0
        let freqMap = new Map()
        let res = 0
        for (let i=0 ; i<s.length;i++ ){
        let count = freqMap.get(s[i]) || 0
        freqMap.set(s[i], ++count)
        maxFreq = Math.max(maxFreq, count)
        let window = (i - left) + 1
        if (window - maxFreq <= k){
            res = Math.max(res,window)
        }else{
            while((i - left + 1) - maxFreq > k){
                freqMap.set(s[left], freqMap.get(s[left]) - 1)
                left++ 
            }
        }
        }
        return res
    }
}