/**
 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。



示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

 */

var levelOrder = (r) => {
   const result = []
   /* dep 层级数 */
   const help = (root,dep) => {
      if(root){
         if(!result[dep] ) result[dep] = []
         result[dep].push(root.val)
         help(root.left,dep + 1)
         help(root.right,dep + 1)
      }
   }

   help(r,0)
   return result
}