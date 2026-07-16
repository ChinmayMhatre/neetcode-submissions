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
     * @return {void}
     */
    reorderList(head) {
        let fast = head
        let slow = head

        while (fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let first = head


        let prev = null
        let current = slow.next
        slow.next = null

        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        let second = prev

        while(second){
            let tmp1 = first.next
            let tmp2 = second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }


    }
}
