import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NavBar from '.';

describe('NavBar Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<NavBar />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
