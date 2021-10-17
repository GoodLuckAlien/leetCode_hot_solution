/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 示例 1：

    输入：n = 3
    输出：["((()))","(()())","(())()","()(())","()()()"]
    示例 2：

    输入：n = 1
    输出：["()"]

 */


var generateParenthesis = function(n){
    const result = []
    const cur = n * 2
    const help = (str,i,result,left,right) => {
        if(str.length === cur  ){
            left === n && right === n && result.push(str)
            return
        }

        help(str+'(' , i + 1 ,result ,left + 1 ,right  )
        if(left > right ) help(str+')' , i + 1 ,result ,left , right + 1 )
     }

    help('(',1,result,1,0)

    return result
}


console.log( generateParenthesis(3) )