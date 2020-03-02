/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return head;
    
    const dummy = new ListNode(0);
    dummy.next = head;
    
    
    let prev = dummy;
    while (prev.next !== null && prev.next.next !== null) {
        const first = prev.next;
        const second = prev.next.next;
        
        first.next = second.next;
        second.next = first;
        
        prev.next = second;
        
        prev = first;
    }
    
    
    return dummy.next;
};