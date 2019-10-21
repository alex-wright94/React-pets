import React, { Component } from 'react';
import './App.css';
import "react-router";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Table from './Table';
import New from './New';
import Update from './Update';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Onepet from './Onepet';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Pet Shelter</h1>
        <h3>These pets are looking for a home!</h3>
        <ul>
          <li><Link to="/">All Pets</Link></li>
          <li><Link to="/new">Add a pet to the shelter</Link></li>
        </ul>
        <Route exact path="/" component={Table} />
        <Route path="/new" component={New} />
        <Route path="/edit/:_id" component={Update} />
        <Route path="/details/:_id" component={Onepet} />
      </BrowserRouter>
    );
  }
}

export default App;