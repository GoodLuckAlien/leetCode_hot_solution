/*
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。



示例 1：


输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：


输入：head = [1,1,1,2,3]
输出：[2,3]


提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列

*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/* 训啊 */
var deleteDuplicates = function(head) {
    if(!head) return null
    const dynmic = new ListNode(-Infinity)
    dynmic.next= head
    let parent = dynmic
    let children = head
    while(children && children.next){
        if(children.val === children.next.val){
             const val = children.val
             while( children && children.val === val ){
                 children = children.next
             }
             parent.next = children
        }else{
            parent = parent.next
            children = children.next
        }
    }

    return dynmic.next
}