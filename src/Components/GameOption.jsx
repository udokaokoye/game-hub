import React from 'react'
import { Link } from 'react-router'
function GameOption({gameData}) {
  return (
    <Link className='gameLink' to={`/${gameData.name.replace(/\s/g, "-").toLowerCase()}`} >
    <div className="gameOptionContainer">
        <div style={{backgroundImage: `url(${gameData.img})`}} className="gameImg">
        </div>
        <h3>{gameData.name}</h3>
    </div>
    </Link>
  )
}

export default GameOption