import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  test('App component renders without crashing', () => {
    shallow(<App />;
  });

  test('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const appHeaderElement = wrapper.find('.App-header');

    expect(appHeaderElement.exists()).toBe(true);
  });

  test('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    const appBodyElement = wrapper.find('.App-body');

    expect(appBodyElement.exists()).toBe(true);
  });

  test('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const appfooterElement = wrapper.find('.App-footer');

    expect(appfooterElement.exists()).toBe(true);
  });
});
