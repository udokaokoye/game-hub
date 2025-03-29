import React from "react";

function WelcomeView({ userName, setUserName, setstartGame }) {
  return (
    <div id="welcome-screen">
      <form id="name-form">
        <div className="form-group">
          <label htmlFor="username">Type your name: </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter Name Here..."
            minLength="2"
            maxLength="15"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        {userName.length > 1 && (
          <button
            onClick={() => {
              if (userName == "") {
                alert("Please enter your name to start the game!");
              } else {
                setstartGame(true);
              }
            }}
            className="btn btn-primary"
            id="start-game-button"
            type="button"
          >
            Start Game!
          </button>
        )}
      </form>
    </div>
  );
}

export default WelcomeView;