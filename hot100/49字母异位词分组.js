/**
 *
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。


示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]


提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母

 */

var groupAnagrams = function(strs){
    /* 存放数组  */
   const map = {}
   for(let i=0; i < strs.length ; i++){
       const cur = strs[i].split('').sort().join('')
       if(map[cur]){
           map[cur].push( strs[i] )
       }else{
           map[cur] = [ strs[i] ]
       }
   }
   const result = []
   for( let item  in  map){
       result.push( map[item] )
   }
   return result
}

console.log( groupAnagrams( ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']  ) )