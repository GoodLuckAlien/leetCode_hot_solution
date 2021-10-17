/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 * 示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"

 *
 */

function expandAroundCenter(s,start,end){
    while(start >=0 && end < s.length && s.charAt(start) === s.charAt(end) ){
        /* 向两边扩散 */
        start--
        end++
    }
    /* start 和 end 内部为回文字符串 */
    return end - start - 1
}

var longestPalindrome = function(s){
    if(!s && s.length === 0) return ''
    let end = 0
    let start = 0
    for(let i=0; i < s.length -1 ;i++){
        const len2 = expandAroundCenter(s,i,i)    // 情况一： bab
        const len1 = expandAroundCenter(s,i,i+1)  // 情况二： aabb
        const len = Math.max(len1,len2)

        if(len > end -start ){ /* 证明此时有更大回文串 */
            console.log(len)
            end = Math.floor( i + len / 2 )
            start = Math.round(i - (len - 1) / 2 )
        }

    }
    return s.slice(start,end + 1)
}


console.log( longestPalindrome('babad'))