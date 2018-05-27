import styled from 'styled-components';
import bg1 from '../../../assets/images/imani-clovis-89441-unsplash-min.jpg';
import bg2 from '../../../assets/images/sergey-zolkin-1045-unsplash-min.jpg';

export const HeroImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg1});
  background-size: cover;
`;
HeroImage.displayName = 'HeroImage';
