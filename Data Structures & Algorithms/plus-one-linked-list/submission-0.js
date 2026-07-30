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
     * @return {ListNode}
     */
    plusOne(head) {
        let stack = []
        let temp = head
        while(temp){
            stack.push(temp.val)
            temp = temp.next
        }

        let carry = 1
        for(let i = stack.length - 1; i >= 0; i--) {
            let sum = stack[i] + carry
            stack[i] = sum % 10
            carry = Math.floor(sum/10)
        }
        if(carry){
            stack.unshift(carry)
        }

        let dummy = new ListNode(0)
        let cur = dummy
        for (let digit of stack){
            cur.next = new ListNode(digit)
            cur = cur.next
        }

        return dummy.next

    }
}
