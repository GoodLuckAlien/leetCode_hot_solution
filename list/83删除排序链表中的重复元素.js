/**
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。
示例 1：
输入：head = [1,1,2]
输出：[1,2]
示例 2：

输入：head = [1,1,2,3,3]
输出：[1,2,3]

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列

 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(!head) return null
    let dymic = head
    let parent = head
    let children = head.next
    let current = parent.val
    while(children){
       if(children.val === current){
           parent.next = children = children.next  ? children.next : null
       }else {
           parent = children
           current = children.val
           children = children.next
       }
    }
    return dymic
 }
