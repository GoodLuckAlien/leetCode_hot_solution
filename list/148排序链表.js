/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？


示例 1：


输入：head = [4,2,1,3]
输出：[1,2,3,4]

示例 2：

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

示例 3：

输入：head = []
输出：[]
v
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
var sortList = function(head) {
     const result = []
     const help= (root) => {
         if(root){
             result.push(root.val)
         }
     }
     help(head)
     result.sort((a,b)=>a-b)
     let newHead = new ListNode()
     let current = null
     result.forEach((item,index)=>{
        if( index === 0) newHead = current = new ListNode(item)
        else current = current.next =  new ListNode(item)
     })
     return newHead.next
};