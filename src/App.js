import React, { Component } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Test from './components/Test';
import Home from './components/Home';
import History from './components/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <ul className="Nav">
          <li>
            <NavLink activeClassName="active" to="/history"> Our story</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/home"> Home </NavLink>
          </li>
          </ul>
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/test" component={Test} />
            <Route path="/" component={Home} />
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
