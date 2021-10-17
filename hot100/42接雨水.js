/**
 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。



示例 1：



输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9


提示：

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
 */

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let max_left = 0
    let max_right = 0
    let result = 0
    while(left < right ){
        if( height[left] < height[right] ){
            if(height[left] > max_left){
                max_left = height[left]
            }else{
                result += max_left - height[left]
            }
            left++
        }else{
            if(height[right] > max_right ){
                max_right = height[right]
            }else{
                result += max_right - height[right]
            }
            right--
        }
    }

    return result
 }

 console.log( trap( [0,1,0,2,1,0,1,3,2,1,2,1] ) )