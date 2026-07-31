/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} m
     * @param {number} n
     * @return {ListNode}
     */
    deleteNodes(head, m, n) {
        let temp = head 
        while(temp){
            let left = 1
            let right = 0
            while(temp && left < m){
                temp = temp.next
                left++
            }
            if (!temp) break;
            let rightref = temp.next
            while(rightref && right < n){
                rightref = rightref.next
                right++
            }
            temp.next = rightref
            temp = temp.next
        }
        return head
    }
}