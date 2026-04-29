class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const pair = { '}': '{', ']': '[', ')': '(' };

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      // quick check for opening brackets
      if (ch === '(' || ch === '{' || ch === '[') {
        stack.push(ch);
        continue;
      }

      // ch is a closing bracket
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === pair[ch]) {
        stack.pop();
      } else {
        return false;
      }
    }

    return stack.length === 0;
  }
}