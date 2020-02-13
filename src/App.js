import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Game from './components/Game/Game.component';
import Welcome from './components/Welcome/Welcome.component';
import './App.css';

const HomeLink = withRouter(({ history }) => {
  const { push } = history;

  const handleClick = () => {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      push('/');
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      Back to home
    </button>
  );
});

const Header = ({ hideHome }) => {
  return (
    <header className="App__header" data-testid="app-header">
      {!hideHome && <HomeLink />}
      <div>
        <img src={logo} alt="Origami Energy" />
      </div>
    </header>
  );
};

function App({ history }) {
  const { location } = history;

  const hideHome = location.pathname === '/';

  return (
    <div className="App">
      <Header hideHome={hideHome} />
      <Switch>
        <Route path="/game">
          <Game />
        </Route>

        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
