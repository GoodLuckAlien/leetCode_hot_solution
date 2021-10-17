/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true

 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   if(s.length === 0) return true
   const stack = [ s.charAt(0) ]
   const map = {
       ')':'(',
       ']':'[',
       '}':'{'
   }
   for(let i=1 ; i < s.length ; i++){
       const current = s.charAt(i)
        if(!map[current]){
            stack.push(current)
        }else{
            const right = stack.pop()
            if(right !== map[current]){
                return false
            }
        }
   }
   return stack.length == 0 ? true : false
}
console.log( isValid('([)]') )