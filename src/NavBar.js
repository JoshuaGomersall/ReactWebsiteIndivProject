import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";
import './App.css';
import Home from './Home';
import Character from './Character';
import BackStroy from './BackStory';
import MeleeWeapon from './MeleeWeapon';

function RoutingExample() {

  return (
    <Router>
      <div className="grid-container">
          <div className="item1">
            <h1> </h1>
          </div>


      <div className="item2">
        <div className="topnav">
          <NavLink to="/Home">Home</NavLink>
          <br></br><br></br><br></br><br></br>
          <NavLink to="/Character">Character</NavLink>
          <br></br><br></br><br></br><br></br>
          <NavLink to="/BackStory">BackStory</NavLink>
          <br></br><br></br><br></br><br></br>
          <NavLink to="/MeleeWeapon">Melee Weapons</NavLink>
          <br></br><br></br><br></br><br></br>
          <NavLink to="/RangedWeapon">Ranged Weapons</NavLink>
          <br></br><br></br><br></br><br></br>
          <NavLink to="/Combat">Combat</NavLink>
        </div>
        </div>


        <Route exact path="/Home" component={Home} />
        <Route exact path="/Character" component={Character} />
        <Route exact path="/BackStory" component={BackStroy} />
        <Route exact path="/MeleeWeapon" component={MeleeWeapon} />

        <div>


        </div>
      </div>
    </Router>
  );
}

class RefExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...'
    }
    this.updateState = (e) => {
      e.preventDefault();
      this.setState({
        data: e.target.value
      });
    }
    this.clearInput = (e) => {
      e.preventDefault();
      this.setState({
        data: ""
      });
      this.textInput.focus();
    }
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.data} onChange={this.updateState} ref={(input) => this.textInput = input} />
        <h4>{this.state.data}</h4>
        <button onClick={this.clearInput}>
          CLEAR
          </button>
      </form>
    );
  }
}

export default RoutingExample;
