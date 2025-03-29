import React, {useState} from "react";
import Gameview from "./Gameview";
import WelcomeView from "./WelcomeView";

function RockPaperScisors() {
  const [userName, setUserName] = useState("");
  const [startGame, setstartGame] = useState(false);
  return (
    <div className="RPC_Container">
      <title>Rock Paper Scissors</title>
      <h1>Rock Paper Scissors in React</h1>
      {startGame ? (
        <Gameview userName={userName} />
      ) : (
        <WelcomeView
          userName={userName}
          setUserName={setUserName}
          setstartGame={setstartGame}
        />
      )}
    </div>
  );
}

export default RockPaperScisors;
