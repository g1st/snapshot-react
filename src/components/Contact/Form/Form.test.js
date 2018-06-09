import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from '.';

describe('Form Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Form />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
