import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

const DEFAULT_COLOR = '#1cb2e7';

const normaliseDieNumber = number => {
  const roundedNumber = Math.floor(number);
  const maximisedNumber = Math.min(roundedNumber, 6);
  return Math.max(1, maximisedNumber);
};

const dieIconMap = new Map([
  [1, faDiceOne],
  [2, faDiceTwo],
  [3, faDiceThree],
  [4, faDiceFour],
  [5, faDiceFive],
  [6, faDiceSix],
]);

const Dice = ({ number, className }) => {
  const normalisedNumber = normaliseDieNumber(number);
  const icon = dieIconMap.get(normalisedNumber);
  return (
    <FontAwesomeIcon
      className={className}
      data-testid={normalisedNumber}
      icon={icon}
      color={DEFAULT_COLOR}
      size="6x"
    />
  );
};

Dice.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Dice.defaultProps = {
  className: '',
};

export default Dice;
