import React, { Component } from 'react';
//import logo from './logo.svg';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './MoviesPage';
import MoviesFormPage from './MoviesFormPage';
import './App.css';

const ActiveLink = ({ label,to,activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
     <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="首页" />
          <ActiveLink activeOnlyWhenExact to="/movies" label="电影" />
          <ActiveLink activeOnlyWhenExact to="/movies/new" label="新增" />
        </div>
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/new" component={MoviesFormPage} />
        <Route path="/movie/:_id" component={MoviesFormPage} />
      </div>
    );
  }
}

export default App;
