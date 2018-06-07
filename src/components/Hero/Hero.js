import React from 'react';

import { Wrapper, LandingInfo, LandingText, HeaderText } from './styled';
import Button from '../Button';
import Background from './Background';

const Hero = () => {
  return (
    <Wrapper id="home">
      <Background />
      <LandingInfo>
        <HeaderText>Let's take a snapshot</HeaderText>
        <LandingText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dicta
          repellendus veritatis commodi, voluptatem a facilis delectus.
        </LandingText>
        <Button title="Snapshot" big={false} />
      </LandingInfo>
    </Wrapper>
  );
};

export default Hero;
