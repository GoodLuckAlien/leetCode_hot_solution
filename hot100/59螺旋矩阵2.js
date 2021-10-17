/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。



示例 1：


输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]

 */
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
     if(n === 0 ) return []
    /* 形成数组结构 */
    const result = new Array(n).fill(0).map(()=> new Array(n).fill(0) )
    /* 遍历数组 */
    let current = 1
    let left = 0 , right = n -1, top = 0 , bottom = n-1

    while( left <= right && top <= bottom ){
        for(let i = left; i <= right;i++ ){
            result[top][i] = current
            current++
        }
        for(let i = top + 1; i<= bottom ;i++ ){
            result[i][right] = current
            current++
        }
        if( left < right && top < bottom ){
            for(let i = right -1 ; i > left;i--){
                result[bottom][i] = current
                current++
            }
            for(let i =bottom;i > top ;i-- ){
                result[i][left] = current
                current++
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return result
 }
 console.log(  generateMatrix( 3 ) )