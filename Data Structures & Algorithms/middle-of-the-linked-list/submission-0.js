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
    middleNode(head) {
        let slow = 0
        let fast = 0
        let temp = head
        while (temp.next){
            fast++
            temp = temp.next
        }
        let slowItr = head
        while(slow !== Math.ceil(fast/2)){
            slow++
            slowItr = slowItr.next

        }
        return slowItr
    }
}
