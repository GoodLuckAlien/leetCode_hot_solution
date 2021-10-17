/**
 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。



示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const result = []
    if(!matrix || matrix.length ===0 || matrix[0].length === 0 ){
        return result
    }
    const cols = matrix[0].length  // 列
    const rows = matrix.length     // 行
    let left = 0 , top = 0, right =  cols - 1  , bottom = rows - 1
    while( left <= right && top <= bottom ){
        for(let i = left; i <= right ;i++ ){
            result.push( matrix[top][i]  )
        }
        for(let i = top+1; i <= bottom ;i++){
            result.push( matrix[i][right] )
        }
        if(left < right && top < bottom ){
            for(let i = right-1;i > left; i--){
                result.push( matrix[bottom][i] )
            }
            for(let i= bottom ; i > top ; i--  ){
                result.push( matrix[i][left] )
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return result
 }

console.log( spiralOrder( [[1,2,3,4],[5,6,7,8],[9,10,11,12]]  ) )