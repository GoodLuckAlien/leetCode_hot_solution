/**
 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。



示例1：

输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
解释:
          1
         / \
        3   2
       / \   \
      5   3   9
示例2：

输入: root = [1,2,3]
输出: [1,3]
解释:
          1
         / \
        2   3
示例3：

输入: root = [1]
输出: [1]
示例4：

输入: root = [1,null,2]
输出: [1,2]
解释:
           1
            \
             2
示例5：

输入: root = []
输出: []
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
 * @return {number[]}
 */
 var largestValues = function(root) {
    const output = []
    const help = (r,dep) =>{
        if(r){
            output[dep] = output[dep]!== undefined   ? r.val : Math.max(output[dep],r.val)
            help(r.left,dep + 1)
            help(r.right,dep + 1)
        }
    }
    help(root,0)
    return output
};