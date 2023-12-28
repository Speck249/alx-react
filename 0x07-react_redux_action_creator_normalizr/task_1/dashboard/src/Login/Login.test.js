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

  it('Submit button is disabled by default', () => {
    const wrapper = mount(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('Submit button is enabled after changing input values', () => {
    const wrapper = mount(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });
  });
});
