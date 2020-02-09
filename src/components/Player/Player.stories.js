import React from 'react';
import { number, text, boolean } from '@storybook/addon-knobs';
import Player from './Player.component';

export default {
  component: Player,
  title: 'Player',
};

export const DefaultPlayer = () => {
  return (
    <Player
      name={text('player name', 'Player 1')}
      roll={number('dice roll', 1)}
      wins={number('number of wins', 0)}
      winner={boolean('winner', true)}
    />
  );
};
