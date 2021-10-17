/**

按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord -> s1 -> s2 -> ... -> sk 这样的单词序列，并满足：

每对相邻的单词之间仅有单个字母不同。
转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList 中的单词。
sk == endWord
给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk] 的形式返回。



示例 1：

输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
解释：存在 2 种最短的转换序列：
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
示例 2：

输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：[]
解释：endWord "cog" 不在字典 wordList 中，所以不存在符合要求的转换序列。

"hot"
"dog"
["hot","cog","dog","tot","hog","hop","pot","dot"]
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
 var findLadders = function(beginWord, endWord, wordList) {
    const wordListMap = new Set(wordList)
    const wordArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const queue = [ [ beginWord, [beginWord]  ] ]
    const output = []
    let min = Infinity
    while(queue.length > 0){
        const [ begin ,arr  ] = queue.shift()
        if(begin === endWord) {
             if(min >= arr.length){
                 min = arr.length
                 output.push(arr)
             }

        }
        for(let i=0;i < begin.length;i++){
            for(let j=0;j < wordArray.length ; j++){
                const d = begin.slice(0,i) + wordArray[j] + begin.slice(i + 1)
                if(wordListMap.has(d)){
                    queue.push([ d , [...arr,d]  ])
                    wordListMap.delete(d)
                }
            }
        }
    }
    return output
};

console.log( findLadders( 'hit' ,  'cog' , ['hot','dot','dog','lot','log','cog'] ) )