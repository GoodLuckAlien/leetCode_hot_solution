/**
 * 53. 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000
 */

/* TODO:  暴力法  */
// var maxSubArray = function(nums) {
//    let result = -Infinity
//    for(let i = 0;i < nums.length;i++){
//        let currentResult = nums[i]
//        let currenMax = nums[i]
//        for(let j = i + 1  ;j < nums.length ; j++ ){
//            currentResult += nums[j]
//            currenMax = Math.max(currentResult ,currenMax  )
//        }
//        result = Math.max(result , currenMax )
//    }
//    return result
// }

/* TODO:  动态规划  */
var maxSubArray = function(nums) {
    let max = 0
    let cacheMax = nums[0]
    for(let i=0; i < nums.length ;i++){
        max = Math.max( max + nums[i] , nums[i]  )
        cacheMax = Math.max( max , cacheMax )
    }
    return cacheMax
}

console.log( maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]  ) )