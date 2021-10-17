/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
   给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

   输入：digits = "23"
   输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

   输入：digits = ""
   输出：[]
 */


var letterCombinations = function(digits){
    const output = []
    const mapObject = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }
    const backlist = []
    const arr = digits.split('')
    for(let i = 0; i < arr.length ; i++){
      if( arr[i] in  mapObject ){
        backlist.push( mapObject[ arr[i] ] )
      }
    }
    const length = backlist.length
    const back = (cur,totalStr)=>{
      if(cur === length){
        return output.push(totalStr)
      }
      for(let i = 0 ;i < backlist[cur].length ;i++){
          const curstr = backlist[cur][i]
          back(cur + 1 , totalStr + curstr )
      }
    }

    if(backlist.length >0 )  back(0,'')

    return output
}

console.log( letterCombinations('') )