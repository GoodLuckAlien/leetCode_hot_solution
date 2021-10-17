/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。



示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
示例 2：

输入：triangle = [[-10]]
输出：-10
 */

/* 递归回溯 */
// const minimumTotal = (triangle) => {
//     let result = Infinity
//     const newMap = new Map()
//     /* 层数 */
//     const length = triangle.length
//     /**
//      *
//      * @param {*} result  -> 结果
//      * @param {*} index   -> 索引
//      * @param {*} dep     -> 层数
//      */
//     const help = (lastResult,index,dep) => {

//         if(dep === length - 1 ){
//             return result = Math.min( lastResult , result )
//         }

//         const nextCur = triangle[dep + 1]
//         help( lastResult + nextCur[index] , index , dep + 1  )
//         help( lastResult + nextCur[index + 1], index + 1 , dep + 1 )


//     }

//     help(triangle[0][0],0,0)

//     return result
// }

/* 动态规划 -> 先形成dao */
const minimumTotal = (triangle) => {
    const newArray = new Array(triangle.length)
    for(let i = triangle.length-1; i >= 0 ;i--){
        const index = newArray.length - i - 1
        newArray[index] = index === 0 ? triangle[i] : new Array(triangle[i].length).fill(0)
    }
    for(let i = triangle.length - 2 ;i>=0;i--){
        for(let j =0;j < triangle[i].length ;j++ ){
            const index = newArray.length - i - 1
            newArray[index][j] = Math.min( newArray[index-1][j] + triangle[i][j] , newArray[index-1][j + 1 ] + triangle[i][j]  )
        }
    }
    return newArray[newArray.length-1][0]
}

console.log( minimumTotal( [[2],[3,4],[6,5,7],[4,1,8,3]]) )
// console.log( minimumTotal( [[-10]] ))

