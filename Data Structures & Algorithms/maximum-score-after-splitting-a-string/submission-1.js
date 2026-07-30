class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let ones = 0
        for(let i = 0; i<s.length ; i++){
            if(s[i] === '1') ones++
        }
        let max = 0 
        let zeros = 0
        for(let i = 0; i<s.length -1 ; i++){
            if(s[i] === '0'){
                zeros ++
            }
            if(s[i] === '1'){
                ones--
            }
            max = Math.max(max,zeros+ones)
        }
        return max
    }
}
