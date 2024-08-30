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

export function createPuzzle(level: number) {
    let puzzle = getRandomSudoku(); // получаем матрицу с нулями, в котором заполнена случайная строка
    solve(puzzle); // находим решение для полученной матрицы, т.е. нулевых элементов уже нет
    // обнуляем случайные элементы матрицы
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // тут логика в том, что чем меньше переменная level, тем будет больше нулей, т.е сложность судоку будет больше
            
            if (Math.random() > level/10) puzzle[i][j] = 0;
        }
    }
    return puzzle;
}

function getRandomSudoku() {
    let puzzle = [];
    // заполняем массив puzzle нулевыми массивами из нулей 
    for (let i = 0; i < 9; i++) {
        puzzle[i] = Array(9).fill(0);
    }
    // заполняем случайную строку случайными элементами
    const randRow = Math.floor(Math.random() * 8);
    for (let i = 0; i < 9; i++) {
        let number = Math.floor(Math.random() * 8) + 1;
        while (!isValidPlace(puzzle, randRow, i, number)) {
            number = Math.floor(Math.random() * 8) + 1;
        }
        puzzle[randRow][i] = number;
    }

    return puzzle;
}

const getGameArray = () => {
    //solve(board);
    return board;
}

export default getGameArray;

const a = undefined // 
const b = null // 
const c = "test1".toLowerCase()
const d = 3.4
const e = NaN // обозначает не число
const f = Number.MAX_SAFE_INTEGER
const g = 0n // большие целые числа bigint
const e = Symbol.for(c); // 
const h = { a: 1 }
const t = []
const y = true // boolean

console.log(a === b)

