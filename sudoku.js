
let puzzle = [
    [0, 0, 3, 0, 7, 0, 0, 0, 0],
    [0, 5, 8, 0, 0, 3, 6, 0, 0],
    [0, 6, 0, 4, 0, 0, 0, 9, 3],
    [5, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 4, 0, 5, 2, 9, 0, 7, 0],
    [0, 0, 6, 0, 0, 0, 0, 0, 9],
    [7, 2, 0, 0, 0, 5, 0, 3, 0],
    [0, 0, 5, 3, 0, 0, 7, 2, 0],
    [0, 0, 0, 0, 8, 0, 9, 0, 0]
]

function checkSudoku(board, row, col, num) {
    // check row
    for (let c = 0; c < 9; c++) {
        if (board[row][c] === num) return false
    }
    // check column
    for (let r = 0; r < 9; r++) {
        if (board[r][col] === num) return false
    }
    // check square
    let boxRowStart = Math.floor(row / 3) * 3
    let boxColStart = Math.floor(col / 3) * 3
    for (let r = boxRowStart; r < boxRowStart + 3; r++) {
        for (let c = boxColStart; c < boxColStart + 3; c++) {
            if (board[r][c] === num) return false
        }
    }
    // no violation
    return true
}

function solveSudoku(board) {
   let row = -1
   let col = -1

   // find empty spot
   isEmpty = true
   for (let r = 0; r < 9; r++) {
       for (let c = 0; c < 9; c++) {
           if (board[r][c] === 0) {
               row = r
               col = c
               isEmpty = false // still missing values
               break
           }
       }
    if (!isEmpty) break
   } 

   // no empty spaces left
   if (isEmpty) return true

   // backtracking
   for (let num = 1; num <= 9; num++) {
       if (checkSudoku(board, row, col, num)) {
            board[row][col] = num
            if (solveSudoku(board)) return true
            else board[row][col] = 0 // delete choice
       }
   }
   return false // unsolvable
}

console.log(puzzle)
solveSudoku(puzzle)
console.log(puzzle)

