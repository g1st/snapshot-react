import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faGoogle from '@fortawesome/fontawesome-free-brands/faGooglePlusG';

import {
  Wrapper,
  Container,
  IconsList,
  ListItem,
  Icon,
  Credits
} from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <IconsList>
          <ListItem>
            <a href="https://codepen.io/g1st">
              <Icon>
                <FontAwesomeIcon icon={faCodepen} />
              </Icon>
            </a>
          </ListItem>
          <ListItem>
            <a href="https://twitter.com/g1stas">
              <Icon>
                <FontAwesomeIcon icon={faTwitter} />
              </Icon>
            </a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/g1st">
              <Icon>
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
            </a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/g1st">
              <Icon>
                <FontAwesomeIcon icon={faInstagram} />
              </Icon>
            </a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/g1st">
              <Icon>
                <FontAwesomeIcon icon={faGoogle} />
              </Icon>
            </a>
          </ListItem>
        </IconsList>
        <Credits>
          <a href="https://www.free-css.com/free-css-templates/page227/snapshot">
            Template
          </a>{' '}
          cloned solely for practice porposes by{' '}
          <a href="https://github.com/g1st/snapshot-react">g1st</a>
        </Credits>
      </Container>
    </Wrapper>
  );
};

export default Footer;
