import React from 'react';

import {
  Wrapper,
  NavigationBar,
  Logo,
  NavBarItems,
  NavBarItem
} from './styled';

const NavBar = () => {
  return (
    <Wrapper>
      <NavigationBar>
        <Logo>Snapshot</Logo>
        <NavBarItems>
          <NavBarItem>Home</NavBarItem>
          <NavBarItem>About</NavBarItem>
          <NavBarItem>Gallery</NavBarItem>
          <NavBarItem>Contact</NavBarItem>
        </NavBarItems>
      </NavigationBar>
    </Wrapper>
  );
};

export default NavBar;
