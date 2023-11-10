import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import NotificationItem from './NotificationItem.js';

describe('Notifications component', () => {
  it('should render without crashing', () => {
    shallow(<Notifications />);
  });

  it('should render NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    const notificationItems = wrapper.find(NotificationItem);

    expect(notificationItems).toHaveLength(3);
  });

  it('should render the title of an unordered list', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();

    expect(text).toEqual('Here is the list of notifications');
  });

  it('should render the right HTML in the first NotificationItem element', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotification = wrapper.find(NotificationItem).first();
    const html = firstNotification.prop('html');

    expect(html).toEqual({ __html: '<strong>Important notification</strong>' });
  });
});
