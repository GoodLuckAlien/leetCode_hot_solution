/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
   进阶：你能尝试使用一趟扫描实现吗？
   给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
   进阶：你能尝试使用一趟扫描实现吗？
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeNthFromEnd = function(head,n){
    const staticHead  = new ListNode(0)
    staticHead.next = head
    let frist = head  // 删除链表中的倒数第 n 个元素，那么需要找到 第 n + 1 个元素
    let last = staticHead

    for(let i = 0;i < n ; i++){
        frist = frist.next
    }

    while(frist){
        frist = frist.next
        last = last.next  // last 为倒数低 n 个节点
    }

    last.next = last.next.next
    return staticHead.next
}