import React, { Component } from 'react';
import NavBar from '../NavBar';
import Hero from '../Hero';
import About from '../About';
import TeamCarousel from '../TeamCarousel';

import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <About />
        <TeamCarousel />
      </div>
    );
  }
}

export default App;
