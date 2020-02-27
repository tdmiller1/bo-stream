import React, { Component } from 'react';
import './App.css';

export default class App extends Component{


  render () {
    console.log(process.env.BO_IP);
    return (
      <div className="App">
      <div className="App-header">
        <h1>BO LIVE</h1>
        <img src={process.env.BO_IP}></img>
      </div>
    </div>
    )
  }
}