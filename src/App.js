import React, { Component } from 'react';
//import logo from './logo.svg';
import {Link,Match} from 'react-router';
import MoviesPage from './MoviesPage';
import MoviesForm from './MoviesForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">首页</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/movies">电影</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/movies/new">新增</Link>
        </div>
        <Match exactly pattern="/movies" component={MoviesPage} />
        <Match pattern="/movies/new" component={MoviesForm} />
        <Match pattern="/movie/:_id" component={MoviesForm} />
      </div>
    );
  }
}

export default App;
