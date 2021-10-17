/**

   给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
   注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
   示例 1:

    输入: s = "anagram", t = "nagaram"
    输出: true
    示例 2:

    输入: s = "rat", t = "car"
    输出: false
 */

/**
 * @param  {string} s
 * @param  {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const map = {}
    for(let i = 0 ;i < s.length ;i++ ){
        if(s.charAt(i) in map ){
            map[s.charAt(i)]++
        }else{
            map[s.charAt(i)] = 1
        }
    }
    for(let i = 0;i < t.length ;i++ ){
        if(t.charAt(i) in map ){
              map[t.charAt(i)]--
              if(map[t.charAt(i)]===0) {
                delete map[t.charAt(i)]
              }
        }else {
            return false
        }
    }
    return Object.keys(map).length === 0
};


console.log( isAnagram( 'rat' , 'car' ) )

