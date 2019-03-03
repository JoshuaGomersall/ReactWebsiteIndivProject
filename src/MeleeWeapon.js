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
              <input type="checkbox" value='Contingent Rod' ></input>
              <label htmlFor={this.id}>Contingent Rod</label>
              <br>
              </br>
              <input type="checkbox" value='Brocken Hammer'></input>
              <label htmlFor={this.id}>Brocken Hammer</label>
              <br>
              </br>
              <input type="checkbox" value='Sharp Axe'></input>
              <label htmlFor={this.id}>Sharp Axe</label>
              <br>
              </br>
              <input type="checkbox" value='Brocken Axe'></input>
              <label htmlFor={this.id}>Sublime Hammer</label>
              <br>
              </br>
              <input type="checkbox" value='Cursed Rod'></input>
              <label htmlFor={this.id}>Cursed Rod</label>
              <br>
              </br>
              <input type="checkbox" value='Sublime Hammer'></input>
              <label htmlFor={this.id}>Sublime Sword</label>
              <br>
              </br>
              <input type="checkbox" value='Brocken Axe'></input>
              <label htmlFor={this.id}>Brocken Axe</label>
              <br>
              </br>
              <input type="checkbox" value='Sublime Hammer'></input>
              <label htmlFor={this.id}>Sublime Rod</label>
              <br>
              </br>
              <input type="checkbox" value='Cursed Sword Of Fire'></input>
              <label htmlFor={this.id}>Cursed Sword Of Fire</label>
              <br>
              </br>
              <input type="checkbox" value='Cursed Axe'></input>
              <label htmlFor={this.id}>Cursed Axe</label>
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
