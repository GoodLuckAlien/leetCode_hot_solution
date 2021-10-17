/**
 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。



示例 1：


输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12

 */

var minPathSum = function(grid) {
    /* 形成格子结构 */
    if(grid.length === 0) return 0
    const rowLength = grid.length
    const cowLength = grid[0].length
    const dp = []
    for(let i = 0;i<rowLength;i++ ){
        dp.push([])
    }
    dp[0][0] = grid[0][0]
    for(let i=1;i < cowLength ;i++){
        dp[0][i] = dp[0][i-1] + grid[0][i]
    }
    for(let i = 1; i < rowLength ;i++){
        dp[i][0] = dp[i-1][0]  +  grid[i][0]
    }
    for(let i=1;i < rowLength;i++){
        for(let j=1 ; j < cowLength; j++){
            dp[i][j] = Math.min( dp[i-1][j] + grid[i][j] , dp[i][j-1] + grid[i][j]   )
        }
    }

    return dp[rowLength-1][cowLength-1]
}

console.log( minPathSum(  [[1,2,3]] )  )