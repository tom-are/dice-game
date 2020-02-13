import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Welcome from './Welcome.component';

export default {
  component: Welcome,
  title: 'Welcome',
};

export const DefaultWelcome = () => {
  return (
    <Router>
      <Welcome />
    </Router>
  );
};
