import React, { Component } from 'react';
import NavBar from '../NavBar';
import Hero from '../Hero';

import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    );
  }
}

export default App;
