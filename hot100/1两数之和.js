/**
  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

  你可以按任意顺序返回答案。

  示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]
    示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？ */

// o(n^2)
//  var twoSum = function(nums, target) {
//     const result = []
//     for(let i = 0 ;i < nums.length ; i++ ){
//         for(let j = i + 1; j < nums.length ;j++ ){
//              if(nums[j] + nums[i] === target ){
//                  result.push(j)
//                  result.push(i)
//                  break
//              }
//         }
//     }
//     return result
//  }

// twoSum([2,7,11,15],9)


//  o(n)
var twoSum = function(nums, target){
    const result = []
    const map = {}
    /* 映射到 map 中 */
    nums.forEach((item,index)=>{
        map[item] = index
    })
    for(let i = 0;i < nums.length - 1; i++){
       if( String(target - nums[i]) in map  && i !== map[String(target - nums[i])] ){
            result.push(i)
            result.push( map[String(target - nums[i])] )
            break
       }
    }
    return result
}

console.log( twoSum([2,7,11,15],9) )
