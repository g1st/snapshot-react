import styled from 'styled-components';

import { colorMainDark } from '../../styles/variables';

export const Wrapper = styled.div`
  height: 58px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
`;
Wrapper.displayName = 'Wrapper';

export const NavigationBar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
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
  display: flex;
  & > :first-child {
    margin-left: 0px;
  }
`;
NavBarItems.displayName = 'NavBarItems';

export const NavBarItem = styled.li`
  color: ${colorMainDark};
  margin: 0 30px;
  text-transform: uppercase;
`;
NavBarItem.displayName = 'NavBarItem';
