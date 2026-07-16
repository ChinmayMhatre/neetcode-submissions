class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        let weave = head
        while(weave){
            let dashnode = new Node(weave.val)
            dashnode.next = weave.next
            weave.next = dashnode
            weave = dashnode.next
        }

        let tangle = head

        while (tangle) {
            tangle.next.random = tangle.random ? tangle.random.next : null;
            tangle = tangle.next.next;
        }

        let old_list = head;
        let new_list = head.next;
        let head_new = head.next;
        while (old_list) {
            old_list.next = old_list.next.next;
            new_list.next = new_list.next ? new_list.next.next : null;
            old_list = old_list.next;
            new_list = new_list.next;
        }
        return head_new;
    }
}