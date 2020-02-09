import React, { useState, useEffect } from 'react';
import Player from '../Player/Player.component';
import './Game.css';

const rollSingleDie = () => Math.floor(Math.random() * 6) + 1;

function Game() {
  /*
    Internal states
   */
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [dice, setDice] = useState([1, 1]);
  const [scores, setScores] = useState([0, 0]);
  const [result, setResult] = useState("Let's go!");

  const [playerScore, cpuScore] = scores;
  const [playerDie, cpuDie] = dice;

  /**
   * Increments the scores (if necessary) after dice have been rolled,
   * and sets the result of the round
   */
  const updateScores = () => {
    if (roundsPlayed === 0) {
      setResult("Let's go!");
      return;
    }

    if (playerDie === cpuDie) {
      setResult("It's a draw...");
      return;
    }

    if (playerDie > cpuDie) {
      setScores([playerScore + 1, cpuScore]);
      setResult('You won!');
    } else {
      setScores([playerScore, cpuScore + 1]);
      setResult('You lost...');
    }
  };

  /**
   * Plays a single round, by rolling the dice and updating the state
   * This triggers the useEffect to then recalculate the result of the game
   */
  const playRound = () => {
    setDice([rollSingleDie(), rollSingleDie()]);
    setRoundsPlayed(roundsPlayed + 1);
  };

  useEffect(() => {
    updateScores();
  }, [roundsPlayed]);

  return (
    <div className="Game">
      <div className="Game__Players">
        <Player
          name="You"
          roll={playerDie}
          wins={playerScore}
          winner={playerDie > cpuDie}
        />
        <Player
          name="Computer"
          roll={cpuDie}
          wins={cpuScore}
          winner={cpuDie > playerDie}
        />
      </div>

      <div className="Game__footer">
        <div>{result}</div>
        <button type="button" data-testid="playRound" onClick={playRound}>
          Roll dice!
        </button>
      </div>
    </div>
  );
}

export default Game;
