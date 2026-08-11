/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let value = true
        let check = (root)=>{
            if(!root){
                return 0
            }
            let left = check(root.left)
            let right = check(root.right)
            if(Math.abs(right - left) > 1){
                value = false
            }
            return Math.max(left,right) + 1
        }
        check(root)
        return value
    }
}
