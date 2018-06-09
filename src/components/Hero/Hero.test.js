import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Hero from '.';

describe('Hero Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Hero />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('Wrapper must have #home id attribute', () => {
    const tree = shallow(<Hero />);
    expect(tree.find('Wrapper').find('#home')).toHaveLength(1);
  });
});
