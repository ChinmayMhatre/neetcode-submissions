class Solution {
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            switch (token) {
                case '+': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a + b);
                    break;
                }
                case '-': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a - b);
                    break;
                }
                case '*': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a * b);
                    break;
                }
                case '/': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(Math.trunc(a / b));
                    break;
                }
                default:
                    stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
