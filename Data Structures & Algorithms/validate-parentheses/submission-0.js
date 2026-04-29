class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pair = {
      '}': '{',
      ']': '[',
      ')': '('
    };
        for (let char of s){
            if(['(','{','['].includes(char)){
                stack.push(char)
            }else{
                if (stack.length === 0) return false
                const last = stack[stack.length - 1]
                if(last === pair[char]){
                    stack.pop()
                }else{
                    return false
                }
            }
        }
        return stack.length === 0;
    }
}