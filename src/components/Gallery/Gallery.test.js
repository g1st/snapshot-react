import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Gallery from '.';

describe('Gallery Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Gallery />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('Wrapper must have #gallery id attribute', () => {
    const tree = shallow(<Gallery />);
    expect(tree.find('Wrapper').find('#gallery')).toHaveLength(1);
  });
});
