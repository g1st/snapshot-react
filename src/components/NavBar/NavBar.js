import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { NavHashLink as NavLink } from 'react-router-hash-link';

import {
  Wrapper,
  NavigationBar,
  Logo,
  NavLinkItem as NavLink,
  NavBarItems,
  Menu
} from './styled';

const propTypes = {
  activeNav: PropTypes.string
};

const defaultProps = { activeNav: 'home' };

class NavBar extends Component {
  state = {
    menuExpanded: false
  };

  toggleMenuHandler = () => {
    this.setState(prevState => ({
      menuExpanded: !prevState.menuExpanded
    }));
  };

  // credits https://github.com/rafrex/react-router-hash-link/issues/25
  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <Wrapper>
        <Menu onClick={this.toggleMenuHandler}>&#9776;</Menu>
        <NavigationBar menuExpanded={this.state.menuExpanded}>
          <Logo>Snapshot</Logo>
          <NavBarItems menuExpanded={this.state.menuExpanded}>
            <NavLink
              smooth
              to="/#home"
              exact
              active={this.props.activeNav === 'home' ? 'true' : null}
            >
              Home
            </NavLink>
            <NavLink
              to="/#about"
              scroll={el => this.scrollWithOffset(el, 0)}
              active={this.props.activeNav === 'about' ? 'true' : null}
            >
              About
            </NavLink>
            <NavLink
              smooth
              to="/#gallery"
              active={this.props.activeNav === 'gallery' ? 'true' : null}
            >
              Gallery
            </NavLink>
            <NavLink
              smooth
              to="/#contact"
              active={this.props.activeNav === 'contact' ? 'true' : null}
            >
              Contact
            </NavLink>
          </NavBarItems>
        </NavigationBar>
      </Wrapper>
    );
  }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
