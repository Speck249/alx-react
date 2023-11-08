import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';

describe('Notifications component', () => {
  test('Notifications component renders without crashing', () => {
    shallow(<Notifications />;
  });

  test('renders a list of unordered type', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('li');

    expect(listItems.toHaveLength(3);
  });

  test('renders the title of an unordered list', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();

    expect(text).toEqual("Here is the list of notifications");
  });
});
