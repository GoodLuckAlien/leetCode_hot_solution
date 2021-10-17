/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。



示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]
示例 3：

输入：nums = [0]
输出：[0]
示例 4：

输入：nums = [1]
输出：[1]

 */


var sortColors = function(nums) {
    const length  = nums.length
    let index = 0
    for(let i=0;i  < length;i++ ){
        const current = nums[index]
        console.log(current)
        if(current ===0){
            nums.splice(index,1)
            nums.unshift(current)
            index++
        }else if(current === 2){
            nums.splice(index,1)
            nums.push(current)
        }else{
            index++
        }
    }
    return nums
}
console.log( sortColors( [2,0,2,1,1,0]  ) )