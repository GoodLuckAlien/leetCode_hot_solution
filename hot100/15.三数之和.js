/**

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 */

/* 双指针 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (num)=>{
   let nums = num.sort((a,b)=> a-b )
   const result = []
   for(let i = 0;i < nums.length - 2 ; i++){
     if(i > 0 && nums[i] === nums[i-1] ) continue
      let left = i + 1
      let right = nums.length - 1
      let target = - nums[i]
      while(left < right){
          if(nums[left] + nums[right] === target){
            result.push([ nums[left] , nums[right] , nums[i]  ])
            while( left < right && nums[left] === nums[++left] ){}
            while( left < right && nums[right] === nums[--right] ){}
          }
          else if(nums[left] + nums[right] > target ){
               while( left < right && nums[right] === nums[--right] ){}
          }else if(nums[left] + nums[right] < target){
               while( left < right && nums[left] === nums[++left] ){}
          }
      }
   }
   return result
}

console.log(threeSum([0,0,0,0]))

