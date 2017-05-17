import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="quick-view">
        <div className="quick-view__picture">
          <img src={logo} className="quick-view__image" alt="logo" />
          <h2>Welcome React</h2>
        </div>
        <div className="quick-view__info">
          info
        </div>

        <div className="quick-view__description">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
