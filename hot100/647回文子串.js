/**
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。



示例 1：

输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindromic-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
 /* 验证是否是回文串 */
 const isReset=(str)=>{
    let left = 0
    let right = str.length - 1
    while (left <= right ) {
        if(str[left] !==  str[right]){
            return false
        }
        left++
        right--
    }
    return true
 }



 var countSubstrings = function(s) {
    /* 验证回文传 */
    /* 2层遍历 */
    let result = 0
    for(let i=0;i < s.length ;i++){
        for(let j = i + 1 ;j<=s.length ;j++){
            if(isReset(s.slice(i,j))){
               result++
            }
        }
    }
    return result

};


console.log(
   countSubstrings('aaa')
)