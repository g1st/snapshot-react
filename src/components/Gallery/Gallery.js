import React from 'react';

import {
  Wrapper,
  Container,
  HeadingText,
  Heading,
  Info,
  Button,
  Text,
  CardText,
  GalleryContainer,
  Card,
  Image,
  ImageContainer
} from './styled';

import fruit from '../../assets/images/cherries-2402449_640-min.jpg';

const Gallery = () => {
  return (
    <Wrapper id="gallery">
      <Container>
        <HeadingText>Gallery</HeadingText>
        <Text>
          Nullam scelerisque, quam nec iaculis vulputate, arcu ligula
          sollicitudin nisl, ac volutpat erat nulla a arcu.
        </Text>

        <GalleryContainer>
          <Card>
            <Info>
              <Heading>heading</Heading>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardText>
              <Button>Full Post</Button>
            </Info>
            <ImageContainer>
              <Image src={fruit} alt="Cherries" />
            </ImageContainer>
          </Card>
          <Card>
            <Info>
              <Heading>heading</Heading>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardText>
              <Button>Full Post</Button>
            </Info>
            <ImageContainer>
              <Image src={fruit} alt="Cherries" />
            </ImageContainer>
          </Card>
          <Card>
            <Info>
              <Heading>heading</Heading>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardText>
              <Button>Full Post</Button>
            </Info>
            <ImageContainer>
              <Image src={fruit} alt="Cherries" />
            </ImageContainer>
          </Card>
          <Card>
            <Info>
              <Heading>heading</Heading>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardText>
              <Button>Full Post</Button>
            </Info>
            <ImageContainer>
              <Image src={fruit} alt="Cherries" />
            </ImageContainer>
          </Card>
        </GalleryContainer>
      </Container>
    </Wrapper>
  );
};

export default Gallery;
