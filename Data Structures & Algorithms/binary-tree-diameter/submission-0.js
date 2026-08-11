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
    diameterOfBinaryTree(root) {
        let diameter = 0
        const height = (root)=>{
            if(!root){
                return 0
            }
            let left = height(root.left)
            let right = height(root.right)
            diameter = Math.max((left+right),diameter)
            return Math.max(left,right) + 1
        }
        height(root)
        return diameter
    }
}
