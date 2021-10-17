/**
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。


示例 1：


输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
示例 2：

输入：board = [["X"]]
输出：[["X"]]
 */

var solve = function(board) {
    const m = board.length
    const n = board[0].length
    if(!m) return []
    const help=(x,y)=>{
        if(x < 0 || y < 0 || x === m || y === n ) return 0
        if(board[x][y] === 'O'){
            board[x][y] = 'N'
            help( x + 1 ,y )
            help( x - 1 ,y )
            help( x , y + 1 )
            help( x , y - 1 )
        }
    }
    for(let i = 0; i < m; i++ ){
        for(let j=0; j < n; j++ ){
            if( i===0 || i ===m-1 || j===0 || j===n-1 ){
                if(board[i][j] === 'O' ){
                    help(i,j)
                }
            }
        }
    }

    for(let i = 0; i < m; i++ ){
        for(let j=0; j < n; j++ ){
            if(board[i][j] === 'N'){
                board[i][j] = 'O'
            }else{
                board[i][j] = 'X'
            }
        }
    }

    return board
}

console.log( solve(
    [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]
) )