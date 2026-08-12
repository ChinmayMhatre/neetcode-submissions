/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     } inner
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        let isSame = (p,q)=>{
            if(!p && q){
                return false
            }
            if(p && !q){
                return false
            }
            if(!p && !q){
                return true
            }

            if(p.val === q.val && isSame(p.left,q.left) &&  isSame(p.right,q.right)){
                return true
            }
            return false
        }

        let DFS = (node)=>{
            if(!node){
                return false
            }
            if(node.val === subRoot.val){
            if(isSame(node, subRoot)){
                return true
            }
            }
            return DFS(node.left) || DFS(node.right)
        }
        
        return DFS(root)
    }
}
