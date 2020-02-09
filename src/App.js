import React from 'react';
import logo from './logo.svg';
import Game from './components/Game/Game.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header" data-testid="app-header">
        <img src={logo} alt="Origami Energy" />
      </header>

      <Game />
    </div>
  );
}

export default App;
