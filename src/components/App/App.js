import React, { Component } from 'react';

import NavBar from '../NavBar';
import Hero from '../Hero';
import About from '../About';
import TeamCarousel from '../TeamCarousel';
import Gallery from '../Gallery';
import Contact from '../Contact';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <About />
        <TeamCarousel />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
