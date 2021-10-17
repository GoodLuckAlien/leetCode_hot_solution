/**

给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

示例 1：

输入：n = 3
输出：5
示例 2：

输入：n = 1
输出：1
 */

var numTrees = function(nums){
   let result = 1
   for(let i = 0 ;i < nums ;i++ ) {
       result = result * 2 * ( 2 * i + 1 ) / ( i + 2 )
   }
   return result
}

console.log( numTrees(3) )