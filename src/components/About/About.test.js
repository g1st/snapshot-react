import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import About from '.';

describe('About Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<About />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('Wrapper must have #about  id attribute', () => {
    const tree = shallow(<About />);
    expect(tree.find('Wrapper').find('#about')).toHaveLength(1);
  });
});
