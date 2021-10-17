/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。



示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串


提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const reg = /^[a-zA-Z0-9]{1,1}$/
    let str = ''
    for(let i=0;i<s.length;i++){
        const cur = s.charAt(i)
        if(reg.test(cur)){
            str += cur.toLocaleLowerCase()
        }
    }
    let left = 0 ,right = str.length - 1
    while( left < right ){
        const leftValue = str.charAt(left)
        const rightValue = str.charAt(right)
        if(leftValue === rightValue ){
            left++
            right--
        }else{
            return false
        }
    }
    return true
 }

 console.log( isPalindrome( 'race a car' ) )