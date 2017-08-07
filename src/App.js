import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Router>
            <Link to="movies">Movies</Link>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;
