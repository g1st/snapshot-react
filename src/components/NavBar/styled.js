import styled from 'styled-components';

import { colorMainDark } from '../../styles/variables';

export const Wrapper = styled.div`
  min-height: 58px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
`;
Wrapper.displayName = 'Wrapper';

export const NavigationBar = styled.nav`
  height: 100%;
  display: block;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
  }
`;
NavigationBar.displayName = 'NavigationBar';

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colorMainDark};
  margin-left: 20px;
`;
Logo.displayName = 'Logo';

export const NavBarItems = styled.ul`
  list-style: none;
  display: block;
  & > :first-child {
    margin-left: 0px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;
NavBarItems.displayName = 'NavBarItems';

export const NavBarItem = styled.li`
  color: ${colorMainDark};
  margin: 0 30px;
  text-transform: uppercase;
`;
NavBarItem.displayName = 'NavBarItem';

export const Menu = styled.div`
  display: inline-block;
  user-select: none;
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
Menu.displayName = 'Menu';

export const MenuDrawer = styled.div`
  position: absolute;
  height: 400px;
  background: red;
`;
