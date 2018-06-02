import React from 'react';

import {
  Wrapper,
  Container,
  HeadingText,
  Text,
  GalleryContainer,
  Card,
  Image
} from './styled';

import fruit from '../../assets/images/cherries-2402449_640-min.jpg';

const Gallery = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingText>Gallery</HeadingText>
        <Text>
          Nullam scelerisque, quam nec iaculis vulputate, arcu ligula
          sollicitudin nisl, ac volutpat erat nulla a arcu.
        </Text>

        <GalleryContainer>
          <Card>
            <Image src={fruit} alt="Fruits" />
          </Card>
          <Card>
            <Image src={fruit} alt="Fruits" />
          </Card>
          <Card>
            <Image src={fruit} alt="Fruits" />
          </Card>
          <Card>
            <Image src={fruit} alt="Fruits" />
          </Card>
        </GalleryContainer>
      </Container>
    </Wrapper>
  );
};

export default Gallery;
