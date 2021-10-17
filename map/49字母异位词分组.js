/**

给定一个字符串数组，将字母异位词组合在一起。可以按任意顺序返回结果列表。

字母异位词指字母相同，但排列不同的字符串。



示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

 */
var groupAnagrams = function(strs){
   const map = {}
   const result = []
   for(let i=0; i< strs.length; i++){
        const curStrs = strs[i].split('').sort().join('')
       if(curStrs in map ){
          map[curStrs].push( strs[i] )
       }else{
          map[curStrs] = [ strs[i] ]
       }
   }
   for(let i in map){
       result.push( map[i] )
   }
   return result
}

console.log( groupAnagrams( [''] )  )

