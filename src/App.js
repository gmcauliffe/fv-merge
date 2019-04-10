import React, { Component } from 'react';
import logo from './logo-fpcc-white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            FirstVoices Merge Project
          </p>
          <a
            className="App-link"
            href="https://www.firstvoices.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FirstVoices
          </a>
        </header>
      </div>
    );
  }
}

export default App;
