/**

给定一个 N 叉树，返回其节点值的 后序遍历 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。


输入：root = [1,null,3,2,4,null,5,6]
输出：[5,6,3,2,4,1]

进阶：
递归法很简单，你可以使用迭代法完成此题吗?
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const helper= (root,result) => {
    if(root){
      if(root.children){
          for(let i = 0 ;i < root.children.length ;i++){
              helper(root.children[i],result)
          }
      }
      result.push(root.val)
    }
}

 var postorder = function(root) {
    const result = []
    helper(root,result)
    return result
};

