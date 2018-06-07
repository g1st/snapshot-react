import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import NavBar from '../NavBar';
import Hero from '../Hero';
import About from '../About';
import TeamCarousel from '../TeamCarousel';
import Gallery from '../Gallery';
import Contact from '../Contact';
import Footer from '../Footer';
import './index.css';

const propTypes = {
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const defaultProps = { topOffset: 0 };

class App extends Component {
  state = {
    activeNav: 'home'
  };

  _handleEnterHome = () => {
    this.setState(() => ({
      activeNav: 'home'
    }));
  };

  _handleLeaveHome = () => {
    this.setState(() => ({
      activeNav: 'about'
    }));
  };

  _handleEnterAbout = () => {
    this.setState(() => ({
      activeNav: 'about'
    }));
  };

  _handleLeaveAbout = ({ currentPosition }) => {
    return currentPosition !== 'below'
      ? this.setState(() => ({
          activeNav: 'gallery'
        }))
      : null;
  };

  _handleEnterGallery = props => {
    this.setState(() => ({
      activeNav: 'gallery'
    }));
  };

  _handleLeaveGallery = ({ previousPosition }) => {
    return previousPosition === 'above'
      ? this.setState(() => ({
          activeNav: 'contact'
        }))
      : null;
  };

  _handleEnterContact = () => {
    this.setState(() => ({
      activeNav: 'contact'
    }));
  };

  render() {
    return (
      <div>
        <NavBar activeNav={this.state.activeNav} />
        <Hero />
        <Waypoint
          onEnter={this._handleEnterHome}
          onLeave={this._handleLeaveHome}
          topOffset={100}
        />
        <About />
        <TeamCarousel />
        <Waypoint
          onEnter={this._handleEnterAbout}
          onLeave={this._handleLeaveAbout}
          topOffset={100}
        />
        <Gallery />
        <Waypoint
          onEnter={this._handleEnterGallery}
          onLeave={this._handleLeaveGallery}
          topOffset={100}
        />
        <Contact />
        <Waypoint onEnter={this._handleEnterContact} topOffset={100} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
