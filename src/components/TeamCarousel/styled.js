import styled from 'styled-components';
import { darken } from 'polished';

import {
  colorWhiteBg,
  colorMainLight,
  maxContentWidth,
  colorText
} from '../../styles/variables';

export const Wrapper = styled.div`
  background-color: ${colorWhiteBg};
  padding: 80px 0;
`;
Wrapper.displayName = 'Wrapper';

export const Team = styled.div`
  margin: 0 auto;
  max-width: ${maxContentWidth};
`;
Team.displayName = 'Team';

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
`;
HeadingText.displayName = 'HeadingText';

export const Text = styled.p`
  color: ${darken(0.2, `${colorText}`)};
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 2px;
  line-height: 32px;
  padding-bottom: 20px;
`;
Text.displayName = 'Text';

export const CarouselWrapper = styled.div`
  max-width: ${maxContentWidth};
  margin: 0 auto;
`;
CarouselWrapper.displayName = 'CarouselWrapper';

export const Item = styled.div``;
Item.displayName = 'Item';
