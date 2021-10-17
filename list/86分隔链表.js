/**
 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。



示例 1：


输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：

输入：head = [2,1], x = 2
输出：[1,2]


提示：

链表中节点的数目在范围 [0, 200] 内
-100 <= Node.val <= 100
-200 <= x <= 200
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}

 var partition = function(head, x) {
      const before_head = new ListNode(0)
      const after_head = new ListNode(0)
      let before = before_head
      let after = after_head
      while(head){
          if(head.val >= x){  /* 大于当前节点 */
              after.next = head
              after = after.next
          }else{              /* 小于当前节点 */
              before.next = head
              before = before.next
          }
          head = head.next
      }
      after.next = null  /* 除去 before 内容 */
      before.next = after_head.next /* 合并链表 */
      return before_head.next
 }