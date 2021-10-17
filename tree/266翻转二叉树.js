/**
 翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
const help = (root,oldTree,type) => {
   if(root){
      const newTree = new TreeNode(root.val)
      oldTree[type] = newTree
      help(root.left,newTree,'right')
      help(root.right,newTree,'left')
   }
}

var invertTree = function(root) {
   if(root){
       const newTree = new TreeNode(root.val)
       help(root.left,newTree,'right')
       help(root.right,newTree,'left')
       return newTree
   }else{
       return null
   }
};