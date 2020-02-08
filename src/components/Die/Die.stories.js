import React from 'react';
import { number } from '@storybook/addon-knobs';
import Die from './Die.component';

export default {
  component: Die,
  title: 'Dice',
};

export const NormalDie = () => {
  const dieNumber = number('die number', 1);
  return <Die number={dieNumber} />;
};

export const MultipleRandomDice = () => {
  const numberOfDice = number('number of dice to roll', 4);
  return Array(numberOfDice)
    .fill(() => Math.floor(Math.random() * 6) + 1)
    .map(num => {
      return (
        <span style={{ paddingRight: '10px' }}>
          <Die number={num()} />
        </span>
      );
    });
};
