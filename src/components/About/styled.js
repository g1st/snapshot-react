import styled from 'styled-components';
import { darken } from 'polished';

import { maxContentWidth } from '../../styles/variables';

import {
  colorWhiteBg,
  colorText,
  colorMainLight
} from '../../styles/variables';

export const Wrapper = styled.div`
  background-color: ${colorWhiteBg};
  padding: 80px 0;
`;
Wrapper.displayName = 'Wrapper';

export const AboutWrap = styled.div`
  max-width: ${maxContentWidth};
  margin: 0 auto;
  @media (min-width: 1068px) {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr;
    position: relative;
  }
`;
AboutWrap.displayName = 'AboutWrap';

export const Background = styled.div`
  background-color: #fff;
  margin: 0 15px;
  border-radius: 5px;
  padding: 30px;
  @media (min-width: 1068px) {
    margin-left: 20px;
    grid-column: 1 / span 2;
    position: relative;
    padding: 80px 120px 120px 120px;
  }
`;
Background.displayName = 'Background';

export const HeadingText = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  letter-spacing: 6px;
  font-size: 1.8rem;
  line-height: 86px;
  padding-bottom: 20px;
  color: ${colorMainLight};
  @media (min-width: 500px) {
    letter-spacing: 14px;
    font-size: 2.4rem;
  }
  @media (min-width: 1068px) {
    text-align: left;
  }
`;
HeadingText.displayName = 'HeadingText';

export const Text = styled.p`
  color: ${darken(0.2, `${colorText}`)};
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 2px;
  line-height: 32px;
  padding-bottom: 20px;
  @media (min-width: 1068px) {
    text-align: left;
  }
`;
Text.displayName = 'Text';

export const CircleWrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 1068px) {
    grid-column: 3 / 4;
    justify-self: start;
    margin-top: 0px;
    margin-left: -150px;
    z-index: 1;
  }
`;
CircleWrapper.displayName = 'CircleWrapper';

export const Circle = styled.img`
  height: auto;
  max-width: 100%;
  padding: 15px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: block;
  margin: 50px auto 0 auto;
  border: 10px solid #fff;
  @media (min-width: 1068px) {
    height: 300px;
    width: 300px;
  }
`;
Circle.displayName = 'Cricle';
