import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should render a div with class App-header', () => {
    const wrapper = shallow(<App />);
    const appHeaderElement = wrapper.find('.App-header');

    expect(appHeaderElement.exists()).toBe(true);
  });

  it('should render a div with class App-body', () => {
    const wrapper = shallow(<App />);
    const appBodyElement = wrapper.find('.App-body');

    expect(appBodyElement.exists()).toBe(true);
  });

  it('should render a div with class App-footer', () => {
    const wrapper = shallow(<App />);
    const appfooterElement = wrapper.find('.App-footer');

    expect(appfooterElement.exists()).toBe(true);
  });
});
