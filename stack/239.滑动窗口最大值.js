/**
 * 滑动窗口最大值
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
   返回滑动窗口中的最大值。
   输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
   输出：[3,3,5,5,6,7]
   解释：
滑动窗口的位置                最大值
-----
 [1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

 */
/* 实现一个最大队列 */
var maxSlidingWindow = function(nums, k) {
   const queue = []
   for(let i = 0 ; i < k ;i++){
      while(queue.length && nums[i] >= nums[ queue[queue.length-1] ] ) {
          queue.pop()
      }
      queue.push(i)
   }
   const result = [ nums[queue[0]] ]
   for(let i = k ;i < nums.length ; i++){
        while(queue.length && nums[i] >= nums[queue[queue.length - 1] ]){
            queue.pop()
        }
        queue.push(i)
        while(queue[0] <= i - k ){
            queue.shift()
        }
        result.push(nums[queue[0]])
   }
   return result
};


console.log( maxSlidingWindow([1,3,1,2,0,5],3))