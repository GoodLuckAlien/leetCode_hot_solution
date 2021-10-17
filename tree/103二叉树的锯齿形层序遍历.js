/**
给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]
*/

var zigzagLevelOrder = function(r){
    const result = []
    const help = (root,dep) => {
       if(root){
           if(!result[dep]) result[dep] = []
            if(dep % 2 ===0  ) {
                result[dep].push(root.val)
            }else{
                result[dep].unshift(root.val)
            }
            help(root.left, dep + 1 )
            help(root.right, dep + 1 )
       }
    }
    help(r,0)
    return result
}
