import styled from 'styled-components';
import { darken } from 'polished';

import {
  maxContentWidth,
  colorMainLight,
  maxGridWidth,
  colorText,
  maxTextWidth
} from '../../styles/variables';

export const Wrapper = styled.div`
  margin: 40px 0;
  background-color: #fff;
`;
Wrapper.displayName = 'Wrapper';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${maxContentWidth};
  padding: 0 10px;
`;
Container.displayName = 'Container';

export const HeadingText = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  letter-spacing: 6px;
  font-size: 1.8rem;
  line-height: 86px;
  color: ${colorMainLight};
  @media (min-width: 500px) {
    letter-spacing: 14px;
    font-size: 2.4rem;
  }
`;
HeadingText.displayName = 'HeadingText';

export const Text = styled.p`
  color: ${darken(0.5, `${colorText}`)};
  text-align: center;
  max-width: ${maxTextWidth};
  display: block;
  margin: 20px auto 0 auto;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 32px;
  padding-bottom: 20px;
`;
Text.displayName = 'Text';

export const GalleryContainer = styled.div`
  background-color: salmon;
  max-width: ${maxGridWidth};
  display: block;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin: 60px auto 0 auto;
  padding: 0 20px;
  @media (min-width: 768px) {
    display: grid;
  }
`;
GalleryContainer.displayName = 'GalleryContainer';

export const Card = styled.div`
  background-color: grey;
  overflow: hidden;
  margin: 0 auto 30px auto;
  /* padding-bottom: 40px; */
  max-width: 525px;
  justify-self: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    /* padding-bottom: 0; */
  }
`;
Card.displayName = 'Card';

export const Image = styled.img`
  height: auto;
  width: 100%;
`;
Image.displayName = 'Image';
