/**

给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。



示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0

 */

function longestValidParentheses(s){
  let result = 0
  const stack = [ -1 ]
  for(let i = 0 ; i < s.length ;i++){
     if(s.charAt(i) ==='('){ // 入栈
       stack.push(i)
     }else{
        stack.pop()
        if(stack.length === 0){ /* 栈空 */
           stack.push(i)
        }else{
          result = Math.max( result , i - stack[stack.length - 1 ] )
        }
     }
  }
  return result
}

console.log( longestValidParentheses(')()())'  )  )

