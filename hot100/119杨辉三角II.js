/**
 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: rowIndex = 3
输出: [1,3,3,1]
示例 2:

输入: rowIndex = 0
输出: [1]
示例 3:

输入: rowIndex = 1
输出: [1,1]
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    rowIndex = rowIndex +1
    if(!rowIndex) return []
    let lastRow = [[ 1  ]]
    for(let i=1;i < rowIndex ;i++){
        const row = [ 1 ]
        for(let j=1;j <= i;j++ ){
            if(lastRow[j] && lastRow[j-1]){
                row.push(lastRow[j] + lastRow[j-1]  )
            }else{
                row.push(1)
            }
        }
        lastRow = row
    }
    return lastRow
 }

 console.log( getRow(3) )