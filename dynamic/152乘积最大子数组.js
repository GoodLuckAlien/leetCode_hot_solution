/**
 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。


 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* TODO: 暴力解法 - 超出时间限制 */
//  var maxProduct = function(nums) {
//    let firstIndex = 0
//    let lastIndex = 0

//    let result = -Infinity
//    for(let i=0; i < nums.length ;i++ ){
//        let currentResult = nums[i]
//        let currentMax = nums[i]
//        for(let j= i + 1;j< nums.length;j++ ){
//            currentResult *= nums[j]
//            if(currentResult >= currentMax ){
//                lastIndex = j
//                currentMax = currentResult
//            }
//        }
//        if(currentMax > result) {
//            firstIndex = i
//            result = currentMax
//        }
//    }

//    return nums.slice(firstIndex,lastIndex+1)
// };

/* TODO: -动态规划 */
var maxProduct = function(nums) {
    let max = nums[0]
    let min = nums[0]
    let result = nums[0]
    for(let i = 1 ; i< nums.length;i++ ){
        const mx = max
        const mn = min
        max = Math.max( mx * nums[i] , Math.max( nums[i] , mn * nums[i]  ))
        min = Math.min( mn * nums[i] , Math.min( nums[i] , mx * nums[i]  ))
        result = Math.max(max , result )
    }
    return  result = Math.max( max , result  )
}



console.log( maxProduct(  [2,3,-2,4]  ) )