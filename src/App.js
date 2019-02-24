import React, { Component } from 'react';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Buttons from './Buttons';
import CharacterGen from './CharacterGen';
import RoutingExample from './NavBar';

class App extends Component {
  render() {
    return (
      
      <RoutingExample/>

    );
  }
}

export default App;
