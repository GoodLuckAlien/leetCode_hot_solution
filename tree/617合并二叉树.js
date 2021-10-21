/**
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
     if(!root1  && !root2 ) return null
    const value = (r)=>{
        return r ? r.val : 0
    }
    const left = (r) =>{
        return r ? r.left : null
    }
    const right = (r)=>{
        return r ? r.right : null
    }
    const  help=(r,r1,r2)=>{
        if(r1 || r2){
            if(left(r1) || left(r2) ) r.left = new TreeNode(value(left(r1)) + value(left(r2)))
            if(right(r1) || right(r2) ) r.right = new TreeNode(value(right(r1)) + value(right(r2)))
            help(r.left,left(r1) , left(r2) )
            help(r.right,right(r1),right(r2))
        }
    }
    const result = new TreeNode(value(root1) + value(root2) )
    help(result ,root1,root2 )
    return result
};