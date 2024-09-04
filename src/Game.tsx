import { useEffect, useState } from "react";
import { createPuzzle } from './SudokuSolver';
import { createSolvedArray } from './SudokuSolver';

interface IProps {
    level: number,
    initArray: number[][],
    solvedArray: number[][]
}

const Game = (props: IProps) => {
    //console.log(createPuzzle(level))
    //const [solvedArray, setSolvedArray] = useState(() => createSolvedPuzzle())
    //
    const [solvedArray, setSolvedArray] = useState(createSolvedArray()) 
    const [initArray, setInitArray] = useState(createPuzzle(solvedArray, props.level))
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
                                                        <input disabled={initArray[indRow][indCol] !== 0}
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