/*
求数组中比左边元素都大同时比右边元素都小的元素，返回这些元素的索引
要求时间复杂度
输入：[2, 3, 1, 8, 9, 20, 12]
输出：3, 4
解释：数组中 8, 9 满足题目要求，他们的索引分别是 3、4
 */

function findNumber(arr){

   const left = [  ]
   const right = [  ]
   const result = []
   let leftMax = -Infinity
   let rightMin = Infinity
   for(let i=0;i < arr.length;i++ ){
       leftMax = Math.max( leftMax , arr[i] )
       left[i] = leftMax === arr[i]
   }
   for(let i=arr.length-1;i>=0;i--){
       rightMin = Math.min( rightMin , arr[i] )
       right[i] = rightMin === arr[i]
       if(right[i] && left[i]) result.push(i)
   }
   return result
}

console.log( findNumber( [2, 3, 1, 8, 9, 20, 12] ) )