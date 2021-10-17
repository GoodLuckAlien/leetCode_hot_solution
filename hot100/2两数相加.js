
/**
 *
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let lhead = l1.next
    let lhead2 = l2.next
    let sum = l1.val + l2.val
    let value = sum > 10 ?  sum - 10 : sum
    let add = sum > 10 ? 1 :  0
    const head = new ListNode(value)
    let first = head
    while( lhead || lhead2 ){
        const value1 = lhead ? lhead.val : 0
        const value2 = lhead2 ? lhead2.val : 0
        let sum = value1 + value2 + add
        let value = sum > 10 ?  sum - 10 : sum
        add = sum > 10 ? 1 :  0
        first.next = new ListNode(value)
        if(lhead) lhead = lhead.next
        if(lhead2) lhead2 = lhead2.next
    }
    if(add){
       first.next = new ListNode(add)
    }
    return head
}