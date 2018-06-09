import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '.';

describe('Button Component', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Button title="Title" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("renders 'Title' if title is passed", () => {
    const tree = shallow(<Button title="Title">Title</Button>);
    expect(tree.childAt(0).text()).toEqual('Title');
  });
  it("renders 'Click Me' if title is missing", () => {
    const tree = shallow(<Button />);
    expect(tree.childAt(0).text()).toEqual('Click Me');
  });
});
