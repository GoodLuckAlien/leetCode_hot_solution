/**
 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：

序列中第一个单词是 beginWord 。
序列中最后一个单词是 endWord 。
每次转换只能改变一个字母。
转换过程中的中间单词必须是字典 wordList 中的单词。
给你两个单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。


示例 1：

输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
示例 2：

输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中，所以无法进行转换

 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
//  var ladderLength = function(beginWord, endWord, wordList) {
//     const wordListMap = new Set(wordList)
//     const queue = [ [ beginWord, 0 ] ]
//     const wordArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     while(queue.length > 0){
//        const [begin,count] = queue.shift()
//        if(begin === endWord) return count + 1
//        for(let i = 0; i < begin.length;i++){
//            for(let j = 0 ;j < wordArray.length ;j++ ){
//                const d = begin.slice(0,i) + wordArray[j] + begin.slice(i + 1)
//                if(wordListMap.has(d)){
//                    queue.push([ d , count + 1 ])
//                    wordListMap.delete(d)
//                }
//            }
//        }
//     }
//     return 0
// };



var ladderLength = function(beginWord,endWord,wordList){
    const wordListMap = new Set(wordList)
    const queue = [ [ beginWord ,0 ] ]
    const wordArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    while(queue.length > 0){
        const [ beginWord , num ] = queue.shift()
        if(beginWord === endWord ) return num + 1
        for(let i=0;i <  beginWord.length;i++ ){
            for(let j=0;j < wordArray.length ;j++){
                const newWord = beginWord.slice(0,i) + wordArray[j] + beginWord.slice(i+1)
                if(wordListMap.has(newWord)){
                    queue.push([ newWord , num + 1  ])
                    wordListMap.delete(newWord)
                }
            }
        }
    }
    return 0
}




console.log( ladderLength( 'hit' , 'cog' , ['hot','dot','dog','lot','log','cog']  ) )