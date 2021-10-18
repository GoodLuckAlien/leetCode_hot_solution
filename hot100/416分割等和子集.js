
/**
给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。

 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* TODO: 回溯-> 超时 */
var canPartition = function(nums) {
    let sum = 0, maxNum = 0;
    for (const num of nums) {
        sum += num;
        maxNum = maxNum > num ? maxNum : num;
    }
    const target = Math.floor(sum / 2);
    let result = null
    const help=(index,left,right,leftSub, rightSub )=>{

        if(index === nums.length  ){
           if(leftSub === rightSub) result = [ left , right ]
           return
        }

        const cur = nums[index]

        if(target > leftSub ) help(index + 1,[ cur,...left ],[ ...right ],leftSub + cur, rightSub)
        if(target > rightSub) help(index + 1,[...left],[cur,...right],leftSub,cur + rightSub)
    }
    help(0,[],[],0,0)
    return result ? result : false
};

/* TODO: 动态规划 -> */

console.log(
    canPartition([1,5,11,5])
)

console.log(
    canPartition([1,2,3,5])
)