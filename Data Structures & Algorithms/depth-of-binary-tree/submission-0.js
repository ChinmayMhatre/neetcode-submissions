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
     * @return {number}
     */
    maxDepth(root) {
        let height = (root)=>{
            if(!root){
                return 0
            }
            let left = height(root.left)
            let right = height(root.right)
            return Math.max(left,right) + 1
        }
        return height(root)
    }
}
