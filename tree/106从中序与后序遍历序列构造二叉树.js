/**

根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/* 中序 + 后序 */
var buildTree = function(inorder, postorder) {
    if(inorder.length === 0) return null
    const length = postorder.length
    const current = postorder[ length -1 ]
    const mid = inorder.indexOf(current)
    const root = new TreeNode(current)
    root.left = buildTree( inorder.slice(0,mid) , postorder.slice(0,mid)  )
    root.right = buildTree(inorder.slice(mid + 1) , postorder.slice(mid,length-1) )
    return root
}
