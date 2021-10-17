/**
 *给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。



示例 1：

输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
示例 2：

输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。


提示：

 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */


/*
buy1 = Math.max(buy1 , -prices[i] )
sell1 = Math.max( sell1 , buy1 + prices[i]  )
buy2 = Math.max( buy2 , sell1 - prices[i]  )
sell2 = Math.max( sell2 , buy2 + prices[i]  )
 */

/* TODO: 动态规划，根据 2 次股票计算 */
 var maxProfit = function(k, prices) {
     if(k===0) return 0
    let dp = new Array(k).fill(0).map(()=>{
        const arr = []
        /* 没有买 */
        arr[0] = 0
        /* 买入 */
        arr[1] = -prices[0]
        return arr
    })

    for(let i=1; i < prices.length ;i++ ){
        for(let j = 0;j < dp.length; j++ ){
            dp[j][0] = Math.max( dp[j][0] , dp[j][1] + prices[i]  )
            dp[j][1] = Math.max( dp[j][1] , (dp[j-1] ? dp[j-1][0] : 0 ) - prices[i] )
        }
    }

    return dp[ k-1 ][0]
};

console.log(  maxProfit( 2,[2,4,1] ) )