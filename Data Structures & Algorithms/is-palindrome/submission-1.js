class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('')
        let l = 0;
        let r = arr.length - 1
        while(l<r){
            if (arr[l]!== arr[r]) return false
            l++
            r--
        }
        return true
    }
}
