import styled from 'styled-components';

import {
  colorWhiteBg,
  colorText,
  colorMainLight,
  maxContentWidth
} from '../../styles/variables';

export const Wrapper = styled.div`
  background-color: ${colorWhiteBg};
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 120px;
  }
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
  color: ${colorMainLight};
  @media (min-width: 500px) {
    letter-spacing: 14px;
    font-size: 2.4rem;
  }
`;
HeadingText.displayName = 'HeadingText';

export const Text = styled.p`
  color: ${colorMainLight};
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 32px;
  padding-bottom: 20px;
`;
Text.displayName = 'Text';

export const CardHeadingText = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 1.2rem;
  color: salmon;
  position: absolute;
  top: 280px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  @media (min-width: 500px) {
    font-size: 1.4rem;
  }
`;
CardHeadingText.displayName = 'CardHeadingText';

export const CardText = styled.p`
  color: ${colorText};
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0 50px;
  line-height: 32px;
  padding-bottom: 20px;
  position: absolute;
  top: 270px;
  transform: scale(0);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
CardText.displayName = 'CardText';

export const CarouselWrapper = styled.div`
  max-width: ${maxContentWidth};
  margin: 0 auto;
`;
CarouselWrapper.displayName = 'CarouselWrapper';

export const ItemWrapper = styled.div`
  position: relative;
  height: 500px;
  outline: none;
`;
ItemWrapper.displayName = 'ItemWrapper';

export const Item = styled.div`
  background-color: #fff;
  height: 400px;
  border-radius: 5px;
  position: relative;
  margin: 120px 20px 0 20px;
`;
Item.displayName = 'Item';

export const Image = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  filter: grayscale(100%);
  border-radius: 50%;
  transition: all 0.4s ease;
`;
Image.displayName = 'Image';

export const Img = styled.div`
  position: relative;
  border-radius: 5px;
  height: 100%;
  margin-top: -65px;
  transition: all 0.3s ease;
  :hover {
    background: ${colorMainLight};
    & img {
      top: -40px;
    }
    > h1 {
      top: 220px;
    }
    > p {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
Img.displayName = 'Img';
