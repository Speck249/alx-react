import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from './Notifications.js';
import Header from './Header.js';
import Login from './Login.js';
import Footer from './Footer.js';


describe('App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  
  it('should render an unordered list', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('li');

    expect(listItems).toHaveLength(3);
  });

  it('should render the title of an unordered list', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();

    expect(text).toEqual('Here is the list of notifications');
  });

  it("should render an image and first level heading text", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual("School dashboard");
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it("should render email and password input", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it("should render Copyright at the very least", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
  it('should not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
  it('should not include the Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });
  it('should include the CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
