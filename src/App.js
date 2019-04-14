import React, { Component } from 'react';
import logo from './logo-fpcc-white.png';
import './App.css';
import EntryList from './EntryList.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://pznmh01oo9.execute-api.ca-central-1.amazonaws.com/dev/test-merge-two-records')
      .then(response => response.json())
      .then(responseData => { console.log(responseData); return responseData; })
      .then(data => { this.setState({ entries: data, isLoading: false }) })

      .catch(err => {
        console.log("fetch error" + err);
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            FirstVoices Merge Project
          </p>
        </header>

        <div>
          <EntryList 
            entries={ this.state.entries }
            isLoading={ this.state.isLoading } />
        </div>
      </div>
    );
  }
}

export default App;
