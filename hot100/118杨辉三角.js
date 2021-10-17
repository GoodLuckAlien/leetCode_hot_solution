/**
 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。





示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []
    if(!numRows) return result
    result.push([1])
    for(let i=1;i < numRows ;i++){
        const row = [ 1 ]
        const last = result[i-1]
        for(let j=1;j <= i;j++ ){
            if(last[j] && last[j-1]){
                row.push(last[j] + last[j-1]  )
            }else{
                row.push(1)
            }
        }
       result.push(row)
    }
    return result
}

console.log(
    generate(5)
 )