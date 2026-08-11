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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        let queue = [root]
        let result = []

        while (queue.length > 0){
            let currentLevel = []
            let levelSize = queue.length
            for(let i = 0 ; i < levelSize ; i++){
                let current = queue.shift()
                currentLevel.push(current.val)
                if(current.left){
                    queue.push(current.left)
                }
                if(current.right){
                    queue.push(current.right)
                }

            }
            result.push(currentLevel)
        }
        return result
    }
}