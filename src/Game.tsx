import { useCallback, useEffect, useMemo, useState } from "react";
import { createPuzzle } from './SudokuSolver';
import { createSolvedArray } from './SudokuSolver';

interface IProps {
    level: number
    //initArray?: number[][],
    //solvedArray?: number[][]
}

const Game = (props: IProps) => {
    //console.log(createPuzzle(level))
    //const [solvedArray, setSolvedArray] = useState(() => createSolvedPuzzle())
    //
    const [solvedArray, setSolvedArray] = useState<number[][]>([[]]) 
    const [initArray, setInitArray] = useState<number[][]>([[]])
    const [gameArray, setGameArray] = useState<number[][]>([[]])
    //
    const [showSolveButton, setShowSolveButton] = useState<boolean>(false)

    useEffect(() => {
        //console.log("111")
        //return () => {
        //    console.log("amoun")
        //}
    }, [gameArray])
    
    useEffect(() => {
        const solvArray: number[][] = createSolvedArray()
        setSolvedArray(solvArray.slice().map(el => el.slice()))
        //
        const inArray: number[][] = createPuzzle(solvArray, props.level)
        setInitArray(inArray)
        //
        setGameArray(inArray.slice().map(el => el.slice()))
    }, [props.level])

    // 
    const a1 = [1, 2, 3]
    const array = useMemo(() => {
        return [1, 2, 3]
    }, [])

    const f = useCallback(() => {
        
    }, [])
    

    return (
        <section>
            <button className="button-hide" onDoubleClick={() => setShowSolveButton(!showSolveButton)}>Show</button>
            {showSolveButton && <button onClick={() => setGameArray(solvedArray)}>Solve</button>}
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
                                                            console.log("initArray", initArray)
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