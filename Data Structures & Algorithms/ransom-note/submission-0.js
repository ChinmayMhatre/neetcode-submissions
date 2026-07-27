class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let freq = new Map()
        for(let letter of magazine){
            freq.set(letter,(freq.get(letter)||0 )+ 1)
        }
        for(let letter of ransomNote){
            if(!freq.has(letter) || freq.get(letter) == 0){
                return false
            }
            else{
                freq.set(letter,freq.get(letter) - 1)
            }
        }
        return true
    }
}
