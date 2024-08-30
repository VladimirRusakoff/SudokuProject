import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {
  const [showArray, setShowArray] = useState<boolean>(true)
  const [gameLevel, setGameLevel] = useState<number>(1)

  //console.log(gameLevel)
  return (
    <div className="App">
      <h1>Welcome to Sudoku!</h1>
      <h3>For starting choose the level of game and click button New Game</h3>
      <button onClick={() => setShowArray((prevState => !prevState))}>New Game</button>
      <select value={gameLevel} onChange={(event) => setGameLevel(Number(event.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {showArray && <Game level={gameLevel}  />}
    </div>
  )
}

export default App
