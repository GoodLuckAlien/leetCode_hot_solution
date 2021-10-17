/**
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。


示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]

提示：

1 <= n <= 20
1 <= k <= n

 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/* 回溯 */
 var combine = function(n, k) {
    const result = []
    const resource = []
    for(let i = 0; i < n; i++){
       resource.push( i + 1 )
    }
    const help = (arr,res)=>{
       if(arr.length === k){
           return result.push(arr)
       }
       const len = res.length
       for(let i=0;i < len ;i++ ){
           const cur = res.shift()
           const newarr = [...arr]
           newarr.push(cur)
           help(newarr,[...res])
       }

    }

    for(let i=0;i < n ; i++){
        const cur = resource.shift()
        help([ cur ] , [ ...resource ] )
    }
    return result
}


console.log( combine( 4,1 ) )