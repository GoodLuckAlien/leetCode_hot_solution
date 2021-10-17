/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。



示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25


提示：

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
 */
/* 递归 */
var myPow = (num,power)=>{
    let curNum = power < 0 ? 1 / num : num
    power =  power < 0 ? -power : power
    let r = 1
    const help = ( n )=>{
        if(n===0) return 1
        if(Math.floor(n) === 1 ) return curNum
        const result = help(n / 2)
        if(n % 2 ===1){
            r = result * result * curNum
        }else{
            r = result * result
        }
        return r
    }
    r = help(power)
    return  r
}

console.log( myPow(1.72777,7) )