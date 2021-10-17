/**
 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。
说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

示例:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

    5
   / \
  4   6
 /     \
2       7

另一个正确答案是 [5,2,6,null,4,null,7]。

    5
   / \
  2   6
   \   \
    4   7

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null

    /* 向右子树中，插入左子树 */
    /**
     *
     * @param {*} p  右子树
     * @param {*} c  左子树
     * @returns
     */
    const insertTreeNode =(p,c)=>{
         if(!p) return c
         let current = p
         while(current.left){
             current = current.left
         }
         current.left = c
         return p
    }

    /**
     *
     * @param {*} r     当前 node
     * @param {*} rf    父节点
     * @param {*} type  类型左子树 ｜ 右子树
     */
    const help = (r,rf,type)=>{
        if(r && rf){
            if(r.val === key){ /* 找到此节点 */
                rf[type] = insertTreeNode(r.right,r.left)
            }
            r.val > key ? help(r.left,r,'left') : help(r.right,r,'right')
        }
    }

    if(root.val > key){ /* 左子树情况 */
        help(root.left,root,'left')
    }else if (root.val < key){ /* 右子树情况 */
        help(root.right,root,'right')
    }else{
        root = insertTreeNode(root.right,root.left)
    }

    return root
 };