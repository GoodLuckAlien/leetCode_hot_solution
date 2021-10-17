/**
 *
 *
 *
 * 给定一个二叉树，检查它是否是镜像对称的。

s
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3
进阶：
*/

var isSymmetric = (root) => {
   const help = (left,right) =>{
       if( (!left && !right)) return true
      if((!left && right) || (!right && left )) return false
      if( ( left.val !== right.val ) ) return false
      return help(left.right , right.left ) && help(left.left,right.right)
   }
   help(root.left,root.right)
}