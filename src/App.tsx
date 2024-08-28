import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {
  const [showArray, setShowArray] = useState(false)

  return (
    <div className="App">
      <h1>Welcome to Sudoku!</h1>
      <h3>For starting choose the level of game and click button New Game</h3>
      <button onClick={() => setShowArray((prevState => !prevState))}>New Game</button>
      {showArray && <Game />}
    </div>
  )
}

export default App
