import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial state correctly', () => {
  const { getByText, getByTestId } = render(
    <Router>
      <App />
    </Router>,
  );

  const initialGameResult = getByText(/welcome!/i);
  const header = getByTestId('app-header');

  expect(initialGameResult).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});
