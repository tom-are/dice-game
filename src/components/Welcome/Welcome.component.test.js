import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Welcome from './Welcome.component';

test('renders initial state correctly', () => {
  const { getByText } = render(
    <Router>
      <Welcome />
    </Router>,
  );

  const initialGameResult = getByText(/get started/i);

  expect(initialGameResult).toBeInTheDocument();
});
