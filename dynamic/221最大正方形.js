/**2
 *在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0

提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    const row = matrix.length
    const cow = matrix[0].length
    const dp = []
    let result = -Infinity
    for(let i=0;i< row + 1;i++ ){
        if(i===0){
            dp[i] = new Array(cow + 1 ).fill(0)
        }else{
            dp[i] = [0]
        }
    }
    for(let i=1;i <= row ; i++ ){
        for(let j=1 ;j <= cow; j++){
            if( matrix[i-1][j-1] === '1' ){
                dp[i][j] = Math.min( dp[i-1][j-1] , dp[i-1][j] ,dp[i][j-1] ) + 1
                result = Math.max( result , dp[i][j] )
            }else {
                dp[i][j] = 0
            }
        }
    }
    return result !== -Infinity ? result * result : 0
};

console.log(
    maximalSquare( [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']] )
)