/*
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符


示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length
    let len2 = word2.length
    if(len1 * len2  ===0 ){
        return len2 + len1
    }
    /* 形成数组 */
    const dp = []
    for(let i=0;i <= len1 ;i++){
        dp.push([])
    }
    for(let i=0; i <= len2; i++){
         dp[0][i] = i
    }
    for(let i=0; i <= len1; i++ ){
         dp[i][0] = i
    }
    for(let i=1;i <= len1 ; i++){
        for(let j=1 ;j <= len2;j++){
            const down = dp[i-1][j] + 1
            const left = dp[i][j-1] + 1
            let left_dowm = dp[i-1][j-1]
            if( word1.charAt(i-1) !==  word2.charAt(j-1) ){
                left_dowm++
            }
            dp[i][j] = Math.min( down , left_dowm , left)
        }
    }

    return dp[len1][len2]
};

console.log( minDistance('intention', 'execution'  ) )