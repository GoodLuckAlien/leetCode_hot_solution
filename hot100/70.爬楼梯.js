/**
 *
   假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
   注意：给定 n 是一个正整数。
   斐波那契数列
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = (n)=>{
    let a1 = 1
    let a2 = 2
    let result
    if(n === 1) return 1
    if(n === 2) return 2
    for(let i = 2 ;i < n;i++){
        result = a1 + a2
        a1 = a2
        a2 = result
    }
    return result
 }

 console.log(climbStairs(5))