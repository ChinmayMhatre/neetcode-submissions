class Solution {
    isSubsequence(s, t) {
        let stack = [];
        for (let i = s.length - 1; i >= 0; i--) {
            stack.push(s[i]);
        }

        if (s.length === 0) return true;

        for (let letter of t) {
            if (stack.length > 0 && stack[stack.length - 1] === letter) {
                stack.pop();
                if (stack.length === 0) return true;
            }
        }

        return false;
    }
}