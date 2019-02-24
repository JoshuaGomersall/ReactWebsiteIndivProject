import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Buttons from './Buttons';
import CharacterGen from './CharacterGen';

class Character extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <div className="item1">
            <h1>Character</h1>
          </div>
          <div className="item3">
            <Buttons />
          </div>
          <div className="item4">
            <CharacterGen />
          </div>
          <div className="item5">
            <h3>INFo</h3>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Character;
