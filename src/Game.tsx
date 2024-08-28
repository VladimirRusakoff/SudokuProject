import { useEffect, useState } from "react";
import SudokuSolver from './SudokuSolver';

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

const Game = () => {
    
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
                                                        <input
                                                        value={gameArray[indRow][indCol]} 
                                                        onChange={event => {
                                                            //console.log(`New value ${event.target.value}`)
                                                            setGameArray(prevState => {
                                                                let newArray = prevState.slice()
                                                                let row = newArray[indRow]
                                                                row.splice(indCol, 1, Number(event.target.value))
                                                                return newArray
                                                            }
                                                            )
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