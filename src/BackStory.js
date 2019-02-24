import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import Buttons from './Buttons';
import BackStoryGen from './BackStoryGen';

class BackStroy extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <div className="item1">
            <h1>BackStory</h1>
          </div>
          <div className="item3">
            <Buttons />
          </div>
          <div className="item4">
            <BackStoryGen/>
          </div>
          <div className="item5">
            <infotext>INFo</infotext>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default BackStroy;
