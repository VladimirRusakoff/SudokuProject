import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {
  const [showArray, setShowArray] = useState(false)

  return (
    <div className="App">
      <h1>Hello!</h1>
      <button onClick={() => setShowArray((prevState => !prevState))}>Togle</button>
      {showArray && <Game />}
    </div>
  )
}

export default App
