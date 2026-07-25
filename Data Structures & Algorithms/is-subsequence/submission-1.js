class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let stack = []
        for (let i = s.length-1; i>=0; i--){
            stack.push(s[i])
        }
        if(s.length === 0){
            return true
        }
        for (let letter of t){
            if(stack.length - 1 === 0){
                return true
            }
            if(stack[stack.length-1] === letter){
                console.log(stack.length)
                stack.pop()
            }
        }
        return false
    }
}
