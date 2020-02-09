import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';
import Die from '../Die/Die.component';

const Player = ({ name, roll, wins, winner }) => {
  return (
    <div className="Player">
      <div>{name}</div>
      <Die
        number={roll}
        className={winner ? 'Player__die--winner' : 'Player__die'}
      />
      <div>Wins: {wins}</div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  roll: PropTypes.number,
  wins: PropTypes.number,
  winner: PropTypes.bool,
};

Player.defaultProps = {
  roll: 0,
  wins: 0,
  winner: false,
};

export default Player;
