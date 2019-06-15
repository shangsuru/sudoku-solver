let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function checkSudoku(board, row, col, num) {
    // check row
    for (c = 0; c < 9; c++) {
        if (board[row][c] === num) return false
    }
    // check column
    for (r = 0; r < 9; r++) {
        if (board[r][col] === num) return false
    }
    // check square
    boxRowStart = (row % 3) * 3
    boxColStart = (col % 3) * 3
    for (r = boxRowStart; r < boxRowStart + 3; r++) {
        for (c = boxColStart; c < boxColStart + 3; c++) {
            if (board[r][c] === num) return false
        }
    }
    // no violation
    return true
}

function solveSudoku() {
    
}