/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。



示例 :
给定二叉树

          1
         / \
        2   3
       / \
      4   5
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    /* 二叉树最大深度 */
    let max = 0
    const deep =(root,dp)=>{
        if(root){
            return Math.max(deep(root.left,dp+1), deep(root.right,dp+ 1) )
        }else{
            return dp
        }
    }
    const help=(root)=>{
       if(root){
            max = Math.max( max , deep(root.left,0) + deep(root.right,0) )
            help(root.left)
            help(root.right)
       }
    }
    help(root)
    return max
};