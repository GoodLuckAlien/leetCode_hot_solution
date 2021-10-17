/**
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。



示例 1：


输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
示例 2：

输入：n = 1
输出：[["Q"]]

 */

// const M = require('_@types_minimatch@3.0.3@@types/minimatch')

var solveNQueens = function(n){
    let xMap = new Set()  ,pMap = new Set() , nMap = new Set()
    let output = []
    const help=(top,result)=>{
        if(top === n) return output.push([...result])
        for(let i =0 ;i < n ; i++){
           if( !(xMap.has(i)) && !( pMap.has(top+i) ) && !(nMap.has(top-i)) ){
               xMap.add(i)
               pMap.add(i + top)
               nMap.add(top - i)
               result.push([i,top])
               help(top + 1,result)
               result.pop()
               xMap.delete(i)
               pMap.delete(i+top)
               nMap.delete(top - i)
           }
        }

    }
   for(let i = 0;i < n ;i++){
       let x = i ,y = 0
       xMap= new Set()
       xMap.add(x)
       pMap= new Set()
       pMap.add(y+x)
       nMap= new Set()
       nMap.add(y-x)
       help(y + 1 ,[ [x,y] ])
       xMap=new Set()
       nMap=new Set()
       pMap=new Set()
   }

   output = output.map(item=>{
      return  item.sort((a,b)=>a[0]-b[0]).map((item)=>{
          let r = ''
          for(let i = 0 ;i < n ;i++ ){
             r += item[1] === i? 'Q' : '.'
          }
          return r
      })
   })
   return output
}

console.log( solveNQueens(5) )