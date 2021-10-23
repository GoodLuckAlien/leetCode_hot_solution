/*
给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。



示例 1：

输入：nums = [2,6,4,8,10,9,15]
输出：5
解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
示例 2：

输入：nums = [1,2,3,4]
输出：0
示例 3：

输入：nums = [1]
输出：0


提示：
1 <= nums.length <= 104
-105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/* TODO: 排序 */
 const isSort=(nums)=>{
    for(let i=1;i < nums.length;i++){
         if(nums[i] < nums[i-1] ){
             return false
         }
    }
    return true
 }
 var findUnsortedSubarray = function(nums) {
    if(isSort(nums)){
        return 0
    }
    const sortArr = [...nums].sort((a,b)=> a-b )
    let left = 0
    /* 找到左指针 */
    while (sortArr[left] === nums[left]) {
        left++
    }
    /* 找到右指针 */
    let right = nums.length - 1
    while (sortArr[right] === nums[right] ) {
        right--
    }
    return right - left + 1
};

console.log(
    findUnsortedSubarray(
        [2,6,4,8,10,9,15]
    )
)