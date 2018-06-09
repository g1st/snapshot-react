import styled from 'styled-components';

import {
  colorMainDark,
  colorMainButton,
  maxContentWidth,
  colorText
} from '../../styles/variables';

export const Wrapper = styled.footer`
  background-color: ${colorMainDark};
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-bottom: 80px;
  }
`;
Wrapper.displayName = 'Wrapper';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${maxContentWidth};
  text-align: center;
`;
Container.displayName = 'Container';

export const IconsList = styled.ul`
  list-style: none;
  display: block;
  margin-bottom: 40px;
`;
IconsList.displayName = 'IconsList';

export const ListItem = styled.li`
  display: inline-block;
  color: #fff;

  a {
    color: #fff;
  }
`;
ListItem.displayName = 'ListItem';

export const Icon = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  margin: 10px;
  font-size: 20px;
  transition: 0.3s;

  :hover {
    color: ${colorMainButton};
    background-color: #fff;
    cursor: pointer;
  }
`;
Icon.displayName = 'Icon';

export const Credits = styled.p`
  color: ${colorText};
  font-weight: 300;
  text-align: center;

  a {
    text-decoration: none;
    color: #fff;

    :hover {
      color: ${colorMainButton};
      text-decoration: underline;
    }
  }
`;
Credits.displayName = 'Credits';
