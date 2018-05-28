import styled, { keyframes } from 'styled-components';
import bg1 from '../../../assets/images/sergey-zolkin-1045-unsplash-min.jpg';
import bg2 from '../../../assets/images/imani-clovis-89441-unsplash-min.jpg';

import { colorOverflowBg } from '../../../styles/variables';

export const zoomEffect = keyframes`
  0% {
    opacity: 1;
    transform: scale(1.4);
  }
  3.33% {
    opacity: 1;
  }
  46.67% {
    opacity: 1;
  }
  53.33% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.4);
  }
  93.67% {
    opacity: 0;
    transform: scale(1.45);
  }
  100% {
    opacity: 1;
  }
`;

export const zoomEffect2 = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  46.67% {
    opacity: 1;
    transform: scale(1.4);
  }
  53.33% {
    opacity: 1;
  }
  96.67% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;
Wrapper.displayName = 'Wrapper';

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${bg1});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${zoomEffect} 12s linear infinite;
  z-index: 1;
  @media (max-width: 768px) {
    background-attachment: scroll;
    animation: none;
  }
`;
HeroImage.displayName = 'HeroImage';

export const HeroImage2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${bg2});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${zoomEffect2} 12s linear infinite;

  @media (max-width: 768px) {
    background-attachment: scroll;
    animation: none;
  }
`;
HeroImage.displayName = 'HeroImage2';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${colorOverflowBg};
  opacity: 0.9;
  z-index: 3;
  position: absolute;
`;
Overlay.displayName = 'Overlay';
