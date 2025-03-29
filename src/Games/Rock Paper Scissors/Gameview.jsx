import React, { useState } from "react";
import RockPaperScissors from "./logic";

function Gameview({ userName }) {
  let game = new RockPaperScissors(userName);
  const [userChoice, setuserChoice] = useState("rock");
  const [userScore, setuserScore] = useState(0);
  const [cpuScore, setcpuScore] = useState(0);
  const [gameHistory, setgameHistory] = useState([]);

  function updateScoreTallyUI() {
    setcpuScore(cpuScore + game.score.cpu);
    // console.log(game.score.user);
    setuserScore(userScore + game.score.user);
  }

  function updateGameHistoryUI() {
    setgameHistory([game.gameHistoryLog, ...gameHistory]);
  }

  const playBtn = () => {
    game.play(userChoice);
    updateScoreTallyUI();
    updateGameHistoryUI();
  };

  const resetGameButton = () => {
    game.reset();
    setgameHistory([]);
    setcpuScore(0);
    setuserScore(0);
  };
  return (
    <div id="game-screen">
      <div id="game-history">
        {gameHistory.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </div>
      <div id="score-tally">
        <p id="score">
          {" "}
          {userName}: {userScore} v CPU: {cpuScore}
        </p>
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice: </label>
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"
            onChange={(event) => setuserChoice(event.target.value)}
            defaultValue={"rock"}
          >
            <option id="rock" value="rock">
              Rock
            </option>
            <option id="paper" value="paper">
              Paper
            </option>
            <option id="scissors" value="scissors">
              Scissors
            </option>
          </select>
        </div>
        <div>
          <button
            onClick={() => playBtn()}
            className="btn btn-success"
            id="go-button"
            type="button"
          >
            Play
          </button>
          <button
            onClick={() => resetGameButton()}
            className="btn btn-secondary"
            id="reset-game-button"
            type="button"
          >
            reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Gameview;