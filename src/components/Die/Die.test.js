import React from 'react';
import { render } from '@testing-library/react';
import Die from './Die.component';

const diceNumberFixtures = [
  [1, '1'],
  [2, '2'],
  [3, '3'],
  [4, '4'],
  [5, '5'],
  [6, '6'],
  [0, '1'],
  [0.1234, '1'],
  [1.1234, '1'],
  [7, '6'],
  [7, '6'],
];

test.each(diceNumberFixtures)(
  'must render correct die for input number: %d',
  (inp, out) => {
    const { getByTestId } = render(<Die number={inp} />);
    const icon = getByTestId(out);
    expect(icon).toBeInTheDocument();
  },
);
