import styled from 'styled-components';
import { lighten } from 'polished';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { NavLink } from 'react-router-dom';

import { colorMainDark, colorText } from '../../styles/variables';

export const Wrapper = styled.div`
  min-height: 58px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  overflow: hidden;
`;
Wrapper.displayName = 'Wrapper';

export const NavigationBar = styled.nav`
  height: ${props => (props.menuExpanded ? '260px' : 0)};
  display: grid;
  max-width: 1400px;
  width: 100%;
  grid-template-areas: 'logo' 'navigation';
  transition: height 0.3s ease-out;
  margin: 6px auto 0 auto;
  grid-template-rows: auto 260px;
  grid-row-gap: 10px;
  @media (min-width: 768px) {
    grid-template-areas: 'logo navigation';
    height: 0;
  }
`;
NavigationBar.displayName = 'NavigationBar';

export const Logo = styled.div`
  font-size: 2.1rem;
  font-weight: bold;
  color: ${colorMainDark};
  margin-left: 20px;
  grid-area: logo;
  align-self: top;
  @media (min-width: 768px) {
    align-self: center;
  }
`;
Logo.displayName = 'Logo';

export const NavBarItems = styled.ul`
  list-style: none;
  display: block;
  grid-area: navigation;
  justify-self: start;
  width: 100%;
  border-top: 1px solid ${colorText};
  & > :first-child {
    margin-top: 12px;
  }

  @media (min-width: 768px) {
    align-self: center;
    justify-self: end;
    display: flex;
    width: auto;
    border: none;
    & > :first-child {
      margin-top: 0;
      margin-left: 0;
    }
  }
`;
NavBarItems.displayName = 'NavBarItems';

export const NavLinkItem = styled(NavLink)`
  display: block;
  position: relative;
  color: ${lighten(0.4, `${colorMainDark}`)};
  padding: 5px 0 5px 20px;
  text-transform: uppercase;
  font-size: 0.9rem;
  width: 100%;
  line-height: 36px;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: ${colorMainDark};
  }

  @media (min-width: 768px) {
    display: inline-block;
    font-size: 1rem;
    margin: 0 30px;
    padding-left: 0;

    :hover {
      color: #9aaebf;
    }

    ::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      bottom: 5px;
      left: 0;
      transform: scaleX(0);
      transition: all 0.4s ease;
      visibility: hidden;
      ${props =>
        props.active === 'true'
          ? `{
      transform: scaleX(1);
      visibility: visible;
    }`
          : null};
    }
  }
`;
NavLinkItem.displayName = 'NavLinkItem';

export const Menu = styled.div`
  display: block;
  position: absolute;
  top: 18px;
  right: 0;
  user-select: none;
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
Menu.displayName = 'Menu';
