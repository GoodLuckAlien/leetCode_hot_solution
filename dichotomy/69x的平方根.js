/**
 * 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。

 */

var mySqrt = function(x) {
    let left = 1
    let right = x
    let result = -1
    while(left < right){
        const middle = Math.floor((right + left ) / 2)
        if(middle * middle > x){
            right = middle -1
        }else{
            left = middle + 1
            result  = middle
        }
    }
    return result
}

console.log( mySqrt(8) )