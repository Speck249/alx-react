import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';

describe('Notifications component', () => {
  it('should render without crashing', () => {
    shallow(<Notifications />);
  });

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
});
