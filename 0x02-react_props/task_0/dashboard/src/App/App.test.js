import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
