import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameOptions from './Components/GameOptions'

function App() {

  return (

    <div className="gameHubContainer">

        <h1>Welcome To Game Hub</h1>
        <h5>Please pick a game.</h5>
        

        <GameOptions />
    </div>
  )
}

export default App
