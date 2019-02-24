import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Buttons from './Buttons';
import CharacterGen from './CharacterGen';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <div className="item1">
            <h1>Home</h1>
          </div>
          <div className="item2">
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
