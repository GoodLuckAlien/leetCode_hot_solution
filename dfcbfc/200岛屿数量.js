/**
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。



示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let result = 0

    const m = grid.length
    const n = grid[0].length

    const dfs = (i,j)=>{
         if(i < 0 || j < 0 || i >= m || j >= n  ) return
         if(grid[i][j] === '1'){
            grid[i][j] = 0
             dfs(i+1,j)
             dfs(i,j+1)
             dfs(i-1,j)
             dfs(i,j-1)
         }
    }

    for(let i=0; i < m; i++){
        for( let j=0; j < n; j++ ){
            if(grid[i][j] === '1' ){
                dfs(i,j)
                result++
            }
        }
    }
    return result

};

console.log(numIslands(
    [
        ['1','1','0','0','0'],
        ['1','1','0','0','0'],
        ['0','0','1','0','0'],
        ['0','0','0','1','1']
    ]
))