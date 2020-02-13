import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>Welcome!</h1>
      <Link to="/game">Get started</Link>
    </div>
  );
};

export default Welcome;
