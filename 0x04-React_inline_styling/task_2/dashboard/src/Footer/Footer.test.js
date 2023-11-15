import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

describe("Footer component", () => {
  it("should render without crashing", () => {
    shallow(<Footer />);
  });

  it("should render Copyright at the very least", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
