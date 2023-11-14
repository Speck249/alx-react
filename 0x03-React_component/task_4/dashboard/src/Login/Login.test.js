import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.js';

describe('Login component', () => {
  it("should render without crashing", () => {
    shallow(<Login />);
  });

  it("should render email and password input", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
