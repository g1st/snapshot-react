import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Contact from '.';

describe('Contact Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Contact />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('Wrapper must have #contact id attribute', () => {
    const tree = shallow(<Contact />);
    expect(tree.find('Wrapper').find('#contact')).toHaveLength(1);
  });
});
