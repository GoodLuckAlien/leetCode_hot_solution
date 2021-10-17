/**
 *给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。


示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]


提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000

 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}

var reverseList = function(head) {
   if(!head) return null
   const help = (root)=>{
      if(root && root.next){
           const p = help(root.next)
           root.next.next = root
           root.next = null
           return p
      }else{
          return root
      }
   }
   return help(head)
}