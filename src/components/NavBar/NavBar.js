import React, { Component } from 'react';

import {
  Wrapper,
  NavigationBar,
  Logo,
  NavBarItems,
  NavBarItem,
  Menu
} from './styled';

class NavBar extends Component {
  state = {
    menuExpanded: false
  };

  toggleMenuHandler = () => {
    this.setState(prevState => ({
      menuExpanded: !prevState.menuExpanded
    }));
  };

  render() {
    return (
      <Wrapper>
        <Menu onClick={this.toggleMenuHandler}>&#9776;</Menu>
        <NavigationBar menuExpanded={this.state.menuExpanded}>
          <Logo>Snapshot</Logo>
          <NavBarItems menuExpanded={this.state.menuExpanded}>
            <NavBarItem>Home</NavBarItem>
            <NavBarItem>About</NavBarItem>
            <NavBarItem>Gallery</NavBarItem>
            <NavBarItem>Contact</NavBarItem>
          </NavBarItems>
        </NavigationBar>
      </Wrapper>
    );
  }
}

export default NavBar;
