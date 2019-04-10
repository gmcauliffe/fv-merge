import React, { Component } from 'react';
import logo from './logo-fpcc-white.png';
import './App.css';
import EntryList from './EntryList.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      entries: [
        // { word: "test word 1", phrases: "testing for word one" },
        // { word: "test word 2", phrases: "testing for word two" },    
      ],
    };
  }

  componentDidMount() {
    fetch('https://pznmh01oo9.execute-api.ca-central-1.amazonaws.com/dev/test-merge-two-records')
      .then(response => response.json())
      .then(data => this.setState({ entries: data }))
      .then(console.log('Data Data Data', this.state.entries));
  }


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
        <div>
          <EntryList entries={ this.state.entries }/>
        </div>
      </div>
    );
  }
}

export default App;
