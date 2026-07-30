class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {

        function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

        let prefix = []
        let cursum = 0 
        for(let i=0; i<words.length;i++){
            let first = words[i][0]
            let last = words[i][words[i].length - 1]
            if(isVowel(first) && isVowel(last)){
                cursum++
            }
            prefix.push(cursum)
        }

        let ans =[]
        for(let i = 0;i<queries.length;i++){
            let l = queries[i][0] 
            let r = queries[i][1]

            let val = prefix[r] - (l > 0 ? prefix[l - 1] : 0)
            ans.push(val)
        }
    return ans
    }
}
