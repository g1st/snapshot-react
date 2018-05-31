import React from 'react';

import img from '../../assets/images/about-woman-img.jpg';
import {
  Wrapper,
  AboutWrap,
  Background,
  HeadingText,
  Text,
  CircleWrapper,
  Circle
} from './styled';

const About = () => {
  return (
    <Wrapper>
      <AboutWrap>
        <Background>
          <HeadingText>Background</HeadingText>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            minima expedita aut voluptatem praesentium quae, ad veniam eveniet
            eum quaerat. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </Text>
        </Background>
        <CircleWrapper>
          <Circle src={img} alt="Woman in dress" />
        </CircleWrapper>
      </AboutWrap>
    </Wrapper>
  );
};

export default About;
