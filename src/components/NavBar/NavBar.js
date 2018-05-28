import React, { Component } from 'react';

import {
  Wrapper,
  NavigationBar,
  Logo,
  NavBarItems,
  NavBarItem,
  Menu,
  MenuDrawer
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
        <NavigationBar>
          <Logo>Snapshot</Logo>
          {/* {this.state.menuExpanded ? (
            <MenuDrawer>expandintas menu</MenuDrawer>
          ) : null} */}
          <NavBarItems>
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
