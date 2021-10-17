/**
 * 无重复字符的最长子串
 */
/**
 * 示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
提示：
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

*/

// var lengthOfLongestSubstring = function(s) {
//     let result = s.length > 1 ? 1 : 0
//     let aSet = new Set()
//     for(let i = 0 ; i < s.length ; i++){
//         aSet.clear()
//         aSet.add(s.charAt(i))
//         let j = i + 1
//         for(; j < s.length ; j++ ){
//             if(aSet.has(s.charAt(j))) {
//                 break
//             }
//             aSet.add(s.charAt(j))
//         }
//         result = Math.max( result , j - i   )
//     }
//     return result
// }


var lengthOfLongestSubstring = function(s) {
    const hashSet = new Set()
    const length = s.length
    let result = 0 , ak = -1
    for(let i =0 ; i<length ; i++){
       if(i!==0){
           hashSet.delete(s.charAt(i-1))
       }
       while( ak + 1 < length && !hashSet.has(s.charAt(ak+1)) ){
           hashSet.add(s.charAt(ak+1))
           ak++
       }
       result = Math.max(result,ak-i+1)
    }
   return result
}


console.log( lengthOfLongestSubstring('pwwkew') )