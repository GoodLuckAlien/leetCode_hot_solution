/**
 * 给你一个链表数组，每个链表都已经按升序排列。
   请你将所有链表合并到一个升序链表中，返回合并后的链表。

   输入：lists = [[1,4,5],[1,3,4],[2,6]]
    输出：[1,1,2,3,4,4,5,6]
    解释：链表数组如下：
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    将它们合并到一个有序链表中得到。
    1->1->2->3->4->4->5->6
 */

/* 思路TODO: ：链表中逐一两两合并   */
const mergeTwoList = (l1,l2)=>{
    if(!l1) return l2
    if(!l2) return l1
    if(l1.val  < l2.val){
         l1.next = mergeTwoList(l1.next,l2)
         return l1
    }else{
         l2.next = mergeTwoList(l1,l2.next)
         return l2
    }
}

var mergeKLists = function (lists){
    if(lists.length === 0 ) return null
    if(lists.length === 1 ) return lists[0]
    let result = null
    for(let i=0;i<lists.length-1;i++){
        if(!result) result = lists[i]
        result = mergeTwoList(result,lists[i + 1])
    }
    return result
}