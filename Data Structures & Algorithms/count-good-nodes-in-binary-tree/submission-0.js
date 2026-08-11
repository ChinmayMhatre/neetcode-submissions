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
    goodNodes(root) {
        let count = 0
        let check = (root,max)=>{
            
            if(root.val>=max){
                count++
            }
            let newMax = Math.max(max,root.val)
            if(root.left){
             check(root.left,newMax)
            }
             if(root.right){
             check(root.right,newMax)
            }

        return root
        }
        check(root,root.val)
        return count
    }
}
