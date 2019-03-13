import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Searchbar from './Searchbar';
import Itemlist from './Itemlist';
import { Container, Row, Col } from 'reactstrap';
class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Topbar />
        </header>

        <body>
          <Searchbar />
          <Itemlist />
        </body>
      </div>
    );
  }
}

export default App;
