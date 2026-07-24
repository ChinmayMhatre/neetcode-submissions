class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let best = 0
       let l = 0
       let freq = new Map()
       let maxFreq = 0
       for (let r = 0; r <= s.length - 1; r++){
        const char = s[r];
        freq.set(char, (freq.get(char) || 0) + 1)
        maxFreq = Math.max(maxFreq, freq.get(char))
        while ((r - l + 1) - maxFreq > k) {
            freq.set(s[l], freq.get(s[l]) - 1)
            l++
        }
        best = Math.max(best, r - l + 1)
       }
       return best
    }
}