import React, { Component } from 'react';
import Slider from 'react-slick';

import animal_1 from '../../assets/images/adler-3366239_640-min.jpg';
import animal_2 from '../../assets/images/african-lion-2888519_640-min.jpg';
import animal_3 from '../../assets/images/husky-3380548_640-min.jpg';
import animal_4 from '../../assets/images/kingfisher-2046453_640-min.jpg';
import animal_5 from '../../assets/images/red-fox-2230731_640-min.jpg';
import animal_6 from '../../assets/images/swan-3376622_640-min.jpg';
import animal_7 from '../../assets/images/tiger-3424791_640-min.jpg';

import { slidesToShow } from '../../util/slidesToShow';
import {
  Wrapper,
  Team,
  HeadingText,
  Text,
  CardHeadingText,
  CardText,
  CarouselWrapper,
  Item,
  Image,
  ItemWrapper,
  Img
} from './styled';

const images = [
  animal_1,
  animal_2,
  animal_3,
  animal_4,
  animal_5,
  animal_6,
  animal_7
];

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
            {images.map((image, i) => {
              return (
                <ItemWrapper key={i}>
                  <Item>
                    <Img>
                      <Image
                        src={image}
                        alt="animal portrait"
                        height="200px"
                        width="200px"
                      />
                      <CardHeadingText>Joe, CEO</CardHeadingText>
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </CardText>
                    </Img>
                  </Item>
                </ItemWrapper>
              );
            })}
          </Slider>
        </CarouselWrapper>
      </Wrapper>
    );
  }
}

export default TeamCarousel;
