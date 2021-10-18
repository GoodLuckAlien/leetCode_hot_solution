
/**
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。



示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]


提示：

1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的

 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    for(let i=0;i < nums.length;i++){
        if(map[nums[i]]) map[nums[i]]++
        else map[nums[i]] = 1
    }
    const result = []
    for(let i=0;i < k;i++){
        let cacheKey = null
        let cur = 0
        for(let i in  map){
            if(map[i] > cur){
                cur = map[i]
                cacheKey = i
            }
        }
        delete map[cacheKey]
        result.push(cacheKey*1)
    }
    return result
};


console.log(
    topKFrequent( [1,1,1,2,2,3] , 2 )
)
