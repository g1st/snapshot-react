import styled from 'styled-components';
import {
  colorText,
  colorHeadingText,
  maxContentWidth
} from '../../styles/variables';

export const Wrapper = styled.div`
  /* margin-top: 100px; */
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Wrapper.displayName = 'Wrapper';

export const LandingInfo = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
  max-width: ${maxContentWidth};
  z-index: 3;
  @media (min-width: 768px) {
    height: 45%;
  }
`;
LandingInfo.displayName = 'LandingInfo';

export const HeaderText = styled.div`
  text-transform: uppercase;
  color: ${colorHeadingText};
  letter-spacing: 6px;
  font-size: 2rem;
  line-height: 32px;
  padding: 0 10px;
  font-weight: 300;
  @media (min-width: 768px) {
    font-weight: 300;
    line-height: 60px;
    letter-spacing: 12px;
    font-size: 3rem;
  }
`;
HeaderText.displayName = 'HeaderText';

export const LandingText = styled.div`
  color: ${colorText};
  letter-spacing: 2px;
  line-height: 16px;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 300;
  padding: 0 10px;
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
LandingText.displayName = 'LandingText';
