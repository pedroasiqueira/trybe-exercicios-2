import './App.css';
import React from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Wallet from './components/Wallet';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carteira" component={ Wallet } />

        </Switch>
      </div>
    )
  }
}

export default App;
