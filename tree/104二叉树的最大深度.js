/**
 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
 */

const help=(root,deep)=>{
   if(!root) return deep
   return Math.max( help(root.left,deep + 1) , help(root.right,deep+1) )
}

var maxDepth = function(root) {
    return  help(root,1)
}