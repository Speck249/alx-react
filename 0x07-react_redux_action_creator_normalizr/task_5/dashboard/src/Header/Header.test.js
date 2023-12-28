import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';


describe("Header Component", () => {
  it("should render without crashing", () => {
    shallow(<Header />)
  });

  it("should render an image and first level heading text", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual("School dashboard");
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
