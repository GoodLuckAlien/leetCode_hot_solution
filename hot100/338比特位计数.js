/**
给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。



示例 1：

输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10
示例 2：

输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 */
/**
 * @param {number} n
 * @return {number[]}
 */
/* TODO: 位运算 + 动态规划 */
var countBits = function(n) {
   const dp = new Array(n+1).fill(0)
   for(let i=1;i<=n;i++){
      dp[i] = dp[ i>>1 ] + ( i & 1 )
   }
   return dp
};

console.log( countBits( 5 ) )

