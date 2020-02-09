import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial state correctly', () => {
  const { getByText, getByTestId } = render(<App />);

  const initialGameResult = getByText(/let's go!/i);
  const header = getByTestId('app-header');

  expect(initialGameResult).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});
