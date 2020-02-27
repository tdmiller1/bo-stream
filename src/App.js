import React, { Component } from 'react';
import './App.css';

export default class App extends Component{


  render () {
    console.log(process.env);
    return (
      <div className="App">
      <div className="App-header">
        <h1>BO LIVE</h1>
        <img alt="BO LIVE STREAM" src={process.env.BO_IP}></img>
      </div>
    </div>
    )
  }
}