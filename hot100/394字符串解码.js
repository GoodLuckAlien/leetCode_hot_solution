/**
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。



示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
 */
/**
 * @param {string} s
 * @return {string}
 */
/* 栈解 */
var decodeString = function(s) {
    const stack = []
    let res = ''
    let count = 0
    for(let i=0;i < s.length; i++){
        const cur = s[i]
       if(/^[0-9]{1,1}$/.test(cur)){
           count = count * 10 + Number(cur)
           continue
       }else if( cur === '[') {
            stack.push({ count,res  })
            res = ''
            count =''
            continue
       }else if( cur === ']'){
            const item = stack.pop()
            res = item.res + res.repeat(item.count)
            continue
       }

       res += cur
    }
    return res
};

console.log( /^[0-9]{1,1}$/.test('a') )

console.log(
    decodeString(
        '3[a]2[bc]'
    )
)
console.log(
    decodeString(
        '2[abc]3[cd]ef'
    )
)
console.log(
    decodeString(
        'abc3[cd]xyz'
    )
)

