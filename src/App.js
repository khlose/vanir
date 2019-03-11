import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Searchbar from './Searchbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <Topbar />
        </header>

        <body>
          <Searchbar />
        </body>
      </div>
    );
  }
}

export default App;
