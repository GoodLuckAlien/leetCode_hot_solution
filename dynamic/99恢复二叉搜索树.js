
/*
给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。

进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？



示例 1：


输入：root = [1,3,null,null,2]
输出：[3,1,null,null,2]
解释：3 不能是 1 左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
示例 2：


输入：root = [3,1,4,null,null,2]
输出：[2,1,4,null,null,3]
解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。

提示：
树上节点的数目在范围 [2, 1000] 内
-231 <= Node.val <= 231 - 1
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    /* 交换两个节点位置 */
    const swap = (x, y)=>{
       if(x && y){
            const current = x.val
            x.val = y.val
            y.val = current
       }
    }
    const stack = []
    let x = null ,y = null,pre = null
    while(stack.length > 0 || root  ){
        while(root){
            stack.push( root )
            root = root.left
        }
        root = stack.pop()
        if(pre !== null && pre.val > root.val ){
            y = root
            if(x === null){
                x = pre
            }
       }
       pre = root
       root = root.right

    }
    swap(x,y)
    return root
};