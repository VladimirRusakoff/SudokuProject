import React, { useEffect, useState } from "react";

const Game = () => {

    let initArray = [[1, 0, 0, 0, 2, 3, 1, 3, 4],
                    [1, 0, 0, 0, 2, 3, 1, 3, 4],
                    [1, 0, 0, 0, 2, 3, 1, 3, 4],
                    [1, 0, 0, 0, 2, 3, 1, 3, 4],
                    [1, 0, 0, 0, 2, 3, 1, 3, 4],
                    [1, 0, 0, 1, 2, 3, 1, 3, 4],
                    [1, 0, 0, 0, 2, 3, 1, 3, 4],
                    [1, 0, 0, 5, 2, 3, 1, 3, 4],
                    [1, 9, 0, 5, 5, 3, 1, 3, 4]]

    const [gameArray, setGameArray] = useState(initArray)

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
                                                            console.log(`New value ${event.target.value}`)
                                                            return event.target.value
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