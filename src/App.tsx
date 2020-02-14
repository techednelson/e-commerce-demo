import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.component';

const HastPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/hats'} component={HastPage} />
    </Switch>
    </div>
  );
};

export default App;
