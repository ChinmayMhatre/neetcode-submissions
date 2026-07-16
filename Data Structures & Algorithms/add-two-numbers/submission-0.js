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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let res = new ListNode(0)
        let current = res
        let l = l1
        let r = l2
        let carry = 0
        while(l || r || carry){

            let sum = (l ? l.val : 0) + (r ? r.val : 0) + carry
            let val = sum % 10
            carry = Math.floor(sum / 10)
            
            let node = new ListNode(val)
            current.next = node
            current = current.next
            if (l) l = l.next
            if (r) r = r.next

        }
        return res.next
    }
}