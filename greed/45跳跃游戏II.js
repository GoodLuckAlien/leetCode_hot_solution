/**

给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。
示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: nums = [2,3,0,1,4]
输出: 2

提示:
1 <= nums.length <= 1
 */



var jump = function(nums) {
    let end = 0; // 当前跳跃所能到达的边界
    let steps = 0; // 步数
    let max = 0; // 当前跳跃所有位置可达的最大距离
    for(let i=0;i  < nums.length -1 ;i++ ){
        max = Math.max(max ,nums[i] + i )
        if(end === i){
            end = max
            steps++
        }
    }
    return steps
 }

