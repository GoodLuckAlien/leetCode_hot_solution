/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。



示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。


提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
 */

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    const current = strs.shift()
    if(strs.length === 0) return current
    let left = 0
    while(left < current.length ){
        const c = current.charAt( left )
        for(let i=0;i < strs.length ;i++){
            if(strs[i].charAt(left) !==  c){
                return current.slice(0,left)
            }
        }
        left++
    }
    return current.slice( 0,left )
}


console.log( longestCommonPrefix(  ['dog','racecar','car'] ) )