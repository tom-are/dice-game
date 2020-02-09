import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player.component';

test('must render correct player information', () => {
  const { getByText } = render(
    <Player name="Player 1" roll={1} wins={100} winner={false} />,
  );

  const name = getByText('Player 1');
  const wins = getByText(/wins: 100/i);

  expect(name).toBeInTheDocument();
  expect(wins).toBeInTheDocument();
});

test('must fall back to default player information', () => {
  const { getByText } = render(<Player name="Player 1" />);

  const name = getByText('Player 1');
  const wins = getByText(/wins: 0/i);

  expect(name).toBeInTheDocument();
  expect(wins).toBeInTheDocument();
});
