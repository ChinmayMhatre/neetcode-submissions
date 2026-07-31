class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        let stack = []


        for(let i = 0 ;i<=s.length -1 ; i++){

            if(stack.length > 0 && s[i] === stack[stack.length-1].char){
                stack[stack.length-1].count++
            } else {
                stack.push({char: s[i], count: 1})
            }

            if(stack[stack.length-1].count === k){
                stack.pop()
            }

        }

        let result = "";
for (const { char, count } of stack) {
    result += char.repeat(count);
}
return result;
    }
}
