/**
  柱状图中最大的矩形
 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
 */

const largestRectangleArea = function (heights){
   const stack = []
   const length = heights.length
   const left =  new Array(length) //保存每一根柱子的左边界

   const right  = new Array(length).fill(length) //保存每一根柱子的右边界
   for(let i = 0 ;i<length;i++){
       while( stack.length > 0 && heights[ stack[stack.length-1] ] > heights[i] ){
           right[ stack[stack.length-1] ] = i
           stack.pop()
       }
       left[i] = stack.length <=0 ? -1 : stack[stack.length-1]
       stack.push(i)
   }
   let result = 0
   for(let i = 0;i < length ;i++ ){
       result = Math.max( result ,  heights[i] * (right[i] - left[i] - 1  )   )
   }
   return result
}