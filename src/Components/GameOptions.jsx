import React from 'react'
import GameOption from './GameOption'

function GameOptions() {
    const allGames = [
        {name: "Wordle", img: "https://assetsio.gnwcdn.com/wordle-past-answers-header.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"},
        {name: "Rock Paper Scissors", img: "https://thumb.ac-illust.com/f6/f6145551c198e7b4791dd5ccaa38243a_t.jpeg"},
        {name: "Tic Tac Toe", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"},
        {name: "Hang Man", img: "https://cdn-0001.qstv.on.epicgames.com/fpGdChytcocdgGzSfE/image/landscape_comp.jpeg"},
        {name: "Connect 4", img: "https://store-images.s-microsoft.com/image/apps.41929.13910108538401625.dfad4587-dfb3-4aa4-8bed-b5d2dd8fc79f.54781100-f7e4-4c22-89bf-257118f9ac23?h=1280"}
    ]
  return (
    <div className='gameOptionsContainer'>
        {allGames.map((game) => <GameOption gameData={game} />)}
    </div>
  )
}

export default GameOptions