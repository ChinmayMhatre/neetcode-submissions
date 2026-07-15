class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const pair = { '}': '{', ']': '[', ')': '(' };

    for (let char of s){
        if (pair[char]) {
            if (stack.pop() !== pair[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
  }
}