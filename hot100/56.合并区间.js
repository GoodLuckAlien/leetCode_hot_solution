/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。



示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。


提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort( (a,b) => a[0] - b[0] )
    const result = []
    result.push( intervals[0] )
    for(let i=1;i < intervals.length; i++){
       if(intervals[i][0] > result[result.length-1][1] ){
          result.push( intervals[i] )
       }else if(intervals[i][1] > result[result.length-1][1] ){
          result[result.length-1][1] =intervals[i][1]
       }
    }
    return result
 }

console.log(  merge( [[2,6],[1,3],[8,10],[15,18]] )  )