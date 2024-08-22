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
];

type Test2 = string | number 

let val: Test2 = 12;
val = "string";


interface Test1 {
    name: string
}

const obj: Test1 = {name: "Tg"};

function isValidPlace(grid: Array<Array<number>>, row: number, col: number, number: any) {
    //number[][]
    // check for column
    if (!grid) {
        return false;
    }

    for (let i = 0; i < grid.length; i++) {
        if (grid[i][col] === number) {
            return false;
        }
    }
    // check for row
    for (let i = 0; i < grid.length; i++) {
        if (grid[row][i] === number) {
            return false;
        }
    }
    // check for 3*3 field
    let len = 3;
    if (grid.length === 4) {
        len = 2;
    }
    let localBoxRow = row - (row % len);
    let localBoxCol = col - (col % len);
    for (let i = localBoxRow; i < localBoxRow + len; i++) {
        for (let j = localBoxCol; j < localBoxCol + len; j++) {
            if (grid[i][j] === number) {
                return false;
            }
        }
    }
    //
    return true;
}

function solve(grid: number[][]) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (grid[row][col] === 0) {
                for (let guess = 1; guess < grid.length + 1; guess++) {
                    if (isValidPlace(grid, row, col, guess)) {
                        grid[row][col] = guess;
                        if (solve(grid)) {
                            return true;
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

const getGameArray = () => {
    //solve(board);
    return board;
}

export default getGameArray;

