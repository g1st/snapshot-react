import React from 'react';

import Form from './Form';
import { Wrapper, Container, HeadingText, Text } from './styled';

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingText>Send a message</HeadingText>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos
          cupiditate temporibus, quisquam dolorem voluptatem modi beatae.
        </Text>
        <Form />
      </Container>
    </Wrapper>
  );
};

export default Contact;
