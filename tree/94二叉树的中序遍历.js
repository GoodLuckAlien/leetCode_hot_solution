/**
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 输入：root = [1,null,2,3]

   输出：[1,3,2]
    示例 2：

    输入：root = []
    输出：[]
    示例 3：

    输入：root = [1]
    输出：[1]
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function helper(root,result){
    if(root){
        if(root.left){
            helper(root.left)
        }
        result.push( root.val )

        if(root.right){
            helper(root.right)
        }
    }
}

var inorderTraversal = function (root){
    const result = []
    helper(root)
    return result
}