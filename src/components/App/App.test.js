import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '.';

describe('App Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(
      <App onEnter={() => {}} onLeave={() => {}} topOffset={0} />
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
