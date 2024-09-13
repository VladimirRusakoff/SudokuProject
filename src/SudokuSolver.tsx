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

export function createSolvedArray(): number[][] {
    let puzzle = getRandomSudoku(); // получаем матрицу с нулями, в котором заполнена случайная строка
    solve(puzzle); // находим решение для полученной матрицы, т.е. нулевых элементов уже нет

    return puzzle;
}

export function createPuzzle(grid: number[][], level: number) {
    // обнуляем случайные элементы матрицы
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // тут логика в том, что чем меньше переменная level, тем будет больше нулей, т.е сложность судоку будет больше
            if (Math.random() < level/6) {
                grid[i][j] = 0;
            }
        }
    }
    return grid;
}

function getRandomSudoku(): number[][] {
    let puzzle = [];
    // заполняем массив puzzle нулевыми массивами из нулей 
    for (let i = 0; i < 9; i++) {
        puzzle[i] = Array(9).fill(0);
    }
    // выбираем случайно метод рандомизации: 
    // 1 - выбираем случайную строку 
    // 2 - выбираем случайный столбец
    // 3 - выбираем случайные элементы по диагонали
    const methodOfRandoming = Math.floor(Math.random() * 2);
    if (methodOfRandoming === 0) {
        // заполняем рандомную строку
        const randRow = Math.floor(Math.random() * 8);
        Array(9).fill(1).forEach((elem, ind) => {
            let numb = Math.floor(Math.random() * 8) + 1;
            for(let k = 0; k < 9; k++) {
                if (isValidPlace(puzzle, randRow, ind, numb)) {
                    puzzle[randRow][ind] = numb
                    break
                } else {
                    numb++
                    if (numb === 10) {
                        numb = 1
                    }
                }
            }
        });
        } else if (methodOfRandoming === 1) {
        // заполняем рандомную колонку
        const randCol = Math.floor(Math.random() * 8);
        Array(9).fill(1).forEach((elem, ind) => {
            let numb = Math.floor(Math.random() * 8) + 1;
            for (let k = 0; k < 9; k++) {
                if (isValidPlace(puzzle, ind, randCol, numb)) {
                    puzzle[ind][randCol] = numb
                    break
                } else {
                    numb++
                    if (numb === 10) {
                        numb = 1
                    }
                }
            }
        })
        } else { // if (methodOfRandoming === 2)
            // заполняем рандомными элементами по диагонали
            Array(9).fill(1).forEach((elem, ind) => {
                let numb = Math.floor(Math.random() * 8) + 1;
                for (let k = 0; k < 9; k++) {
                    if (isValidPlace(puzzle, ind, ind, numb)) {
                        puzzle[ind][ind] = numb
                        break
                    } else {
                        numb++
                        if (numb === 10) {
                            numb = 1
                        }
                    }
                }
            })
        }

    return puzzle;
}

//const a = undefined // 
//const b = null // 
//const c = "test1".toLowerCase()
//const d = 3.4
//const e = NaN // обозначает не число
//const f = Number.MAX_SAFE_INTEGER
//const g = 0n // большие целые числа bigint
//const e = Symbol.for(c); // 
//const h = { a: 1 }
//const t = []
//const y = true // boolean

//console.log(a === b)

