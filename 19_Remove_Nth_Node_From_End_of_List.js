/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) return head;
    
    const dummy = new ListNode(0);
    dummy.next = head;
    
    
    let theNext = dummy;
    for (let i = 1; i <= n + 1; i++) {
        theNext = theNext.next;
    }
    
    let current = dummy;
   
    while (theNext !== null) {
        theNext = theNext.next;

        current = current.next;
    }
    
    current.next = current.next.next;
    
    return dummy.next;
};