import React, { Component } from 'react';
import './App.css';

export default class App extends Component{


  render () {
    return (
      <div className="App">
      <div className="App-header">
        <h1>BO LIVE</h1>
        <img src={process.env.IP}></img>
      </div>
    </div>
    )
  }
}