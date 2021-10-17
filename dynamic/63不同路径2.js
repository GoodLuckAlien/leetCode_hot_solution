/**

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？



网格中的障碍物和空位置分别用 1 和 0 来表示。



示例 1：


输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
示例 2：


输入：obstacleGrid = [[0,1],[0,0]]
输出：1


提示：

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] 为 0 或 1
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]===1) return 0

    /* 形成格子机构 -> 第一排填充 1  */
    const cur = obstacleGrid[0]
    let curlength = cur.length
    let rowlength = obstacleGrid.length
    let row = false
    for(let i=1 ; i< cur.length ;i++){
        if(cur[i]===1) {
            cur[i] = 0
            row = true
        }else{
            cur[i] = row ? 0 : 1
        }
    }

    /* 形成格子结构 ->  */
    let cow = false
    for(let i = 1;i<obstacleGrid.length ; i++ ){
        if(obstacleGrid[i][0] === 1){
            obstacleGrid[i][0] = 0
            cow = true
        }else{
            obstacleGrid[i][0] = cow ? 0 : 1
        }
    }
    for(let i = 1 ; i < obstacleGrid.length ;i++ ){
        const cur = obstacleGrid[i]
        for(let j=1; j<cur.length ; j++ ){
            if(cur[j]===1){
                cur[j] = 0
                continue
            }else{
                cur[j] = obstacleGrid[i][j-1] + obstacleGrid[i-1][j]
            }
        }
    }
    return obstacleGrid[rowlength-1][curlength-1]
}

console.log( uniquePathsWithObstacles( [[1,0]] ) )