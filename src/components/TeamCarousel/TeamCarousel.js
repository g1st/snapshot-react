import React, { Component } from 'react';
import Slider from 'react-slick';

import { slidesToShow } from '../../util/slidesToShow';
import {
  Wrapper,
  Team,
  HeadingText,
  Text,
  CarouselWrapper,
  Item
} from './styled';

// const settings = {
//   dots: true,
//   arrows: false,
//   infinite: false,
//   swipeToSlide: true
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

class TeamCarousel extends Component {
  state = {
    settings: {
      dots: true,
      arrows: false,
      infinite: false,
      swipeToSlide: true,
      slidesToShow: slidesToShow(window.innerWidth)
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    const windowWidth = e.target.innerWidth;

    this.setState(() => ({
      settings: {
        ...this.state.settings,
        slidesToShow: slidesToShow(windowWidth)
      }
    }));
  };

  render() {
    return (
      <Wrapper>
        <Team>
          <HeadingText>Snapshot team</HeadingText>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </Team>
        <CarouselWrapper>
          <Slider {...this.state.settings}>
            <Item>
              <h3>1</h3>
            </Item>
            <Item>
              <h3>2</h3>
            </Item>
            <Item>
              <h3>3</h3>
            </Item>
          </Slider>
        </CarouselWrapper>
      </Wrapper>
    );
  }
}

export default TeamCarousel;
