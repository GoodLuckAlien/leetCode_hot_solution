/*
给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。



示例 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]


提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均无重复元素
inorder 均出现在 preorder
preorder 保证为二叉树的前序遍历序列
inorder 保证为二叉树的中序遍历序列

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/* 前序 + 中序 */
const buildTree = (preorder, inorder) => {
    if(inorder.length === 0 ) return null
    const root = new TreeNode(preorder[0])
    const middle = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1,middle + 1) ,inorder.slice(0,middle) )
    root.right  = buildTree(preorder.slice(middle + 1) , inorder.slice(middle + 1 ))
    return root
}

console.log( buildTree( [3,9,20,15,7] ,[9,3,15,20,7] ) )
