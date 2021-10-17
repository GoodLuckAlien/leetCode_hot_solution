/* 剑指offer朋友圈 + 547 省份数量  */

/**
 * 一个班上有 n 个同学，其中一些彼此是朋友，另一些不是。朋友关系是可以传递的，如果 a 与 b 直接是朋友，且 b 与 c 是直接朋友，那么 a 与 c 就是间接朋友。

定义 朋友圈 就是一组直接或者间接朋友的同学集合。

给定一个 n x n 的矩阵 isConnected 表示班上的朋友关系，其中 isConnected[i][j] = 1 表示第 i 个同学和第 j 个同学是直接朋友，而 isConnected[i][j] = 0 表示二人不是直接朋友。

返回矩阵中 朋友圈的数量。



示例 1：


输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2
示例 2：


输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3


提示：

1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] 为 1 或 0
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

/* TODO: 朋友圈 并查集 */
 var findCircleNum = function(isConnected) {
    const length = isConnected.length
    const father = new Array( length )
    /* TODO: 查找 */
    function find(cur){
        if(cur !== father[cur] ){
            father[cur] = find( father[cur] )
        }
        return father[cur]
    }
    /* TODO: 合并 */
    function union (i,j){
        const pi = find(i)
        const pj = find(j)
        if(pi !== pj ){
            father[pj] = pi
        }
    }

    /* TODO:  形成并查集 */
    for(let i = 0; i <  length; i++ ){
         father[i] = i
    }

    /* TODO:  遍历结构 */
    for(let i =0;i < length;i++ ){
        for(let j= i + 1 ;j< length; j++ ){
           if(isConnected[i][j] === 1 ){
               union(i,j)
           }
        }
    }

    let result = 0
    /*  TODO:  查找集合 */
    for(let i=0; i < length; i++ ){
        if(i === father[i] ) result++
    }
    return result
};


console.log(
    findCircleNum( [[1,1,0],[1,1,0],[0,0,1]]  )
 )