class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let operators = ["-","+","*","/"]
        for (let token of tokens){
            if(operators.includes(token)){
                let r = stack.pop()
                let l = stack.pop()
                let val
                     if (token === "+") {
                    val = l + r;
                } else if (token === "-") {
                    val = l - r;
                } else if (token === "*") {
                    val = l * r;
                } else {
                    val = Math.trunc(l / r);
                }

                stack.push(val);
            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop()
    }
}
