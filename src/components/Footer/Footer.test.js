import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from '.';

describe('Footer Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Footer />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
