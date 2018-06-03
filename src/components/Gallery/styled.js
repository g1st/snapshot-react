import styled from 'styled-components';
import { darken } from 'polished';

import {
  maxContentWidth,
  colorMainLight,
  maxGridWidth,
  colorText,
  maxTextWidth,
  colorMainButton
} from '../../styles/variables';

export const Wrapper = styled.div`
  margin: 40px 0 60px 0;
  background-color: #fff;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
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
  margin: 0 auto 30px auto;
  max-width: 525px;
  justify-self: center;
  position: relative;
  perspective: 1700px;
  perspective-origin: 0 50%;
  height: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  :hover {
    > div {
      transform: rotateY(0deg);
    }
    img {
      transform: translateX(25%);
    }
  }
`;
Card.displayName = 'Card';

export const Image = styled.img`
  /* height: auto; */
  height: 100%;
  width: 100%;
  transition: transform 0.4s;
`;
Image.displayName = 'Image';

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
ImageContainer.displayName = 'ImageContainer';

export const Info = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: ${colorMainLight};
  /* backface-visibility: hidden; */
  transform-origin: 0 0;
  transform-style: preserve-3d;
  transform: rotateY(-90deg);
  transition: transform 0.4s;
`;
Info.displayName = 'Info';

export const Heading = styled.h3`
  text-transform: uppercase;
  text-align: left;
  font-weight: 300;
  letter-spacing: 4px;
  font-size: 1.2rem;
  line-height: 24px;
  padding: 20px 0 15px 20px;
  color: ${colorText};
  @media (min-width: 1000px) {
    padding-bottom: 30px;
    letter-spacing: 14px;
    font-size: 1.5rem;
  }
`;
Heading.displayName = 'Heading';

export const CardText = styled.p`
  color: salmon;
  width: 100%;
  min-width: 100%;
  text-align: left;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 24px;
  font-size: 0.9rem;
  padding: 0 20px;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
CardText.displayName = 'CardText';

export const Button = styled.button`
  border: none;
  outline: none;
  color: ${colorText};
  border-radius: 3px;
  padding: 4px 6px;
  background-color: ${colorMainButton};
  position: absolute;
  right: 10px;
  bottom: 10px;
  @media (min-width: 768px) {
    padding: 8px 10px;
    right: 15px;
    bottom: 15px;
  }
  :hover {
    cursor: pointer;
  }
`;
Button.displayName = 'Button';
