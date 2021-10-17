/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

示例 1：
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

示例 2：


输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。

提示：
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var sortedArrayToBST = function(nums) {
    const help = (left,right) => {
        if(left > right){
            return null
        }
        const middle = Math.floor( (left + right  + 1 ) / 2)
        const root = new TreeNode( nums[middle] )
        root.left = help( left ,middle - 1 )
        root.right = help( middle + 1 , right )
        return root
    }
    return help(0,nums.length-1)
}
console.log( sortedArrayToBST( [-10,-3,0,5,9] ) )