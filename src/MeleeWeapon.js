import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Buttons from './Buttons';
import CharacterGen from './CharacterGen';

class MeleeWeapon extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <div className="item1">
            <h1>MeleeWeapon</h1>
          </div>
          <div className="item2">
            <h4>
              <input type="checkbox" value='Contingent Rod'></input>
              <br>
              </br>
              <input type="checkbox" value='Brocken Hammer'></input>
              <br>
              </br>
              <input type="checkbox" value='Sharp Axe'></input>
              <br>
              </br>
              <input type="checkbox" value='Brocken Axe'></input>
              <br>
              </br>
              <input type="checkbox" value='Cursed Rod'></input>
              <br>
              </br>
              <input type="checkbox" value='Sublime Hammer'></input>
              <br>
              </br>
              <input type="checkbox" value='Brocken Axe'></input>
              <br>
              </br>
              <input type="checkbox" value='Sublime Hammer'></input>
              <br>
              </br>
              <input type="checkbox" value='Cursed Sword Of Fire'></input>
              <br>
              </br>
              <input type="checkbox" value='Cursed Axe'></input>
              
              <br>
              </br>
            </h4>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default MeleeWeapon;
