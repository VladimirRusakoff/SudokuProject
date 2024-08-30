import { useEffect, useState } from "react";
import { createPuzzle } from './SudokuSolver';

const initArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0]
];

interface IProps {
    level: number
}

const Game = ({level}: IProps) => {
    //console.log(createPuzzle(level))
    //const [solvedArray, setSolvedArray] = useState(() => createSolvedPuzzle())
    const [gameArray, setGameArray] = useState(initArray)

    useEffect(() => {
        console.log("111")
        return () => {
            console.log("amoun")
        }
    }, [gameArray])

    return (
        <section>
            <table>
                <tbody>
                    {
                        gameArray.map((row, indRow) => {
                            return(
                                <tr>
                                    {
                                        gameArray.map((colum, indCol) => {
                                            return (
                                                <td>
                                                    <div>
                                                        <input disabled={gameArray[indRow][indCol] !== 0}
                                                        value={gameArray[indRow][indCol]} 
                                                        onChange={event => {
                                                            //console.log(`New value ${event.target.value}`)
                                                            const value = Number(event.target.value)
                                                            if (value > 0 && value <= 9) {
                                                                setGameArray(prevState => {
                                                                    let newArray = prevState.slice()
                                                                    let row = newArray[indRow]
                                                                    row.splice(indCol, 1, Number(event.target.value))
                                                                    return newArray
                                                                })
                                                            }
                                                            
                                    
                                                        }}/>
                                                    </div>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Game;