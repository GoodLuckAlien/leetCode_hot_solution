/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历
 * 输入：root = [1,null,2,3]
   输出：[1,2,3]
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 const helper = (root,result) => {
      if(root){
          result.push(root.val)
          if(root.left){
              helper(root.left,result)
          }
          if(root.right){
              helper(root.right,result)
          }
      }
 }

 var preorderTraversal = function(root) {
    const result = []
    helper(root,result)
    return result
};

