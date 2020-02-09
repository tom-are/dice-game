import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game.component';

let mockMathRandom;

beforeEach(() => {
  mockMathRandom = jest.spyOn(global.Math, 'random');
});

afterEach(() => {
  mockMathRandom.mockRestore();
});

test('renders initial state correctly', () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText(/let's go!/i);
  expect(linkElement).toBeInTheDocument();
});

const outcomeFixtures = [
  ['the CPU wins', [0, 1], /you lost.../i],
  ['the player wins', [1, 0], /you won!/i],
  ['the players draw', [1, 1], /it's a draw.../i],
];

test.each(outcomeFixtures)(
  'correctly plays a round where: %s',
  (name, diceRollRandomisations, text) => {
    mockMathRandom
      // Shift results off the fixture one by one, so each "roll" gets a new return value
      // This allows us to easily define what results each player will get
      .mockImplementation(() => diceRollRandomisations.shift());

    const { getByText, getByTestId } = render(<Game />);

    const playRound = getByTestId('playRound');

    fireEvent.click(playRound);

    const outcomeText = getByText(text);
    expect(outcomeText).toBeInTheDocument();
  },
);
