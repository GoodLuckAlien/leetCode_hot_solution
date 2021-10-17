/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。


示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/* 快慢指针
 */
 var searchMatrix = function(matrix,target){
    if(matrix.length === 0 ) return false
    if(matrix.length === 1 ) return matrix[0].indexOf(target) >= 0


    for( let i = 1; i < matrix.length ; i++ ){
        const pre = matrix[i-1][0]
        const cur = matrix[i][0]
        if( target >= pre &&  cur > target ){
            return matrix[i-1].indexOf(target) >= 0
        }
    }
    return matrix[matrix.length-1].indexOf(target) >= 0
 }

console.log( searchMatrix( [[1,3,5,7],[10,11,16,20],[23,30,34,60]] , 13  ) )