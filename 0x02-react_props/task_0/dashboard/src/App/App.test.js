import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  test('App component renders without crashing', () => {
    shallow(<App />;
  });
}
