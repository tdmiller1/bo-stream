import React, { Component } from 'react';
import './App.css';
import config from './config.js';

export default class App extends Component{

  render () {
    return (
      <div className="App">
      <div className="App-header">
        <h1>BO LIVE</h1>
        <img alt="BO LIVE STREAM" src={config.port}></img>
      </div>
    </div>
    )
  }
}