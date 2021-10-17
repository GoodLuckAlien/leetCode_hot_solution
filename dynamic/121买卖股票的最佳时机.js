/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。


示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
/* 动态规划 */
// var maxProfit = function(prices) {
//     const length = prices.length
//     const dp = new Array(length).fill(0).map(()=>([]))
//     dp[0][0] = 0
//     dp[0][1] = - prices[0]
//     for(let i = 1;  i < length ;i++ ){
//         dp[i][0] = Math.max( dp[i-1][0] , dp[i-1][1] + prices[i] ) // 卖出 ，前一天卖出的 和 今天买入的对比
//         dp[i][1] = Math.max( dp[i-1][1] , -prices[i]  )            // 找到买入的最小值
//     }
//     return dp[length-1][0]
//  }

 /* 降维 */
 var maxProfit = function(prices) {
    const length = prices.length
    const dp = new Array(length)
    dp[0] = 0
    let max = - prices[0]
    for(let i = 1;  i < length ;i++ ){
        dp[i] = Math.max( dp[i-1] ,max + prices[i] )   // 卖出 ，前一天卖出的 和 今天买入的对比
        max = Math.max( max , -prices[i]  )            // 找到买入的最小值
    }
    return dp[length-1]
 }


 console.log( maxProfit( [7,1,5,3,6,4] ) )