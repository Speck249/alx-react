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
    const newItem = wrapper.find(NotificationItem);

    expect(newItem).toHaveLength(3);
  });

  it('should render the title of an unordered list', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();

    expect(text).toEqual('Here is the list of notifications');
  });

  it('should render the right HTML in the first NotificationItem element', () => {
    const wrapper = shallow(<Notifications />);
    const notification = wrapper.find(NotificationItem).first();
    const html = notification.prop('html');

    expect(html).toEqual({ __html: '<strong>Important notification</strong>' });
  });
  it('should display the menu item when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const menuItemElement = screen.getByText('Your notifications');
    expect(menuItemElement).toBeInTheDocument();
  });

  it('should not display the notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const notificationsElement = screen.queryByText('Here is the list of notifications');
    expect(notificationsElement).not.toBeInTheDocument();
  });

  it('should display the menu item when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const menuItemElement = screen.getByText('Your notifications');
    expect(menuItemElement).toBeInTheDocument();
  });

  it('should display the notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationsElement = screen.getByText('Here is the list of notifications');
    expect(notificationsElement).toBeInTheDocument();
  });
});
