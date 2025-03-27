import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Wordle from './Games/Wordle/Wordle.jsx'
import Navigation from './Components/Navigation.jsx'
import RockPaperScisors from './Games/Rock Paper Scissors/RockPaperScisors.jsx'
import TicTacToe from './Games/Tic-Tac-Toe/TicTacToe.jsx'
import Hangman from './Games/HangMan/Hangman.jsx'
import Connect4 from './Games/Connect4/Connect4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/rock-paper-scissors' element={<RockPaperScisors />} />
      <Route path='/tic-tac-toe' element={<TicTacToe />} />
      <Route path='/wordle' element={<Wordle />} />
      <Route path='/hang-man' element={<Hangman />} />
      <Route path='/connect-4' element={<Connect4 />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
