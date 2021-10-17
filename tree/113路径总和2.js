/**
 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。



示例 1：


输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
示例 2：


输入：root = [1,2,3], targetSum = 5
输出：[]
示例 3：

输入：root = [1,2], targetSum = 0
输出：[]


提示：

树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
 var pathSum = function(root, sum) {
    let result = []
    if(!root) return result
    const help=(root,arr,s)=>{
       if(!root){
           if(s===sum){
               result.push(arr)
           }
           return
       }
       const curSum = s + root.val
       if(!root.left && !root.right ){
           return help(root.left , [ ...arr,root.val ],curSum  )
       }
       help(root.left ,  [ ...arr,root.val ],curSum  )
       help(root.right , [ ...arr,root.val ],curSum  )
    }
    help(root,[],0)
    return result
 }