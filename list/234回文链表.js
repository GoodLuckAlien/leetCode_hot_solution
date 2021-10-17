/**
 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。



示例 1：


输入：head = [1,2,2,1]
输出：true
示例 2：

输入：head = [1,2]
输出：false
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
     let num = ''
     let num1 = ''
     const help = (root)=>{
         if(root){
             num= num + root.val
             num1 = root.val + num1
             help(root.next)
         }
     }
     help(head)
     return num === num1
}