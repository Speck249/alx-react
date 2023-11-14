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
  it('renders correctly with an empty listNotifications array', () => {
    const { getByText } = render(<Notifications listNotifications={[]} />);
    const noNotificationText = getByText('No new notification for now');
    expect(noNotificationText).toBeInTheDocument();
  });
  it('renders correctly with a list of notifications', () => {
    const notifications = [
      { id: 1, html: 'Notification 1', type: 'default', value: 'Value 1' },
      { id: 2, html: 'Notification 2', type: 'urgent', value: 'Value 2' },
    ];
    const { getAllByTestId } = render(<Notifications listNotifications={notifications} />);
    const notificationItems = getAllByTestId('notification-item');
    expect(notificationItems.length).toBe(notifications.length);
  });
  it('displays the correct messages when listNotifications is empty', () => {
    const { queryByText } = render(<Notifications listNotifications={[]} displayDrawer={true} />);
    const listMessage = queryByText('Here is the list of notifications');
    const noNotificationMessage = queryByText('No new notification for now');

    expect(listMessage).toBeNull();
    expect(noNotificationMessage).toBeInTheDocument();
  });
  it('should call console.log with the correct message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<Notifications listNotifications={[]} />);
    const instance = wrapper.instance();
    const id = 1;

    instance.markAsRead(id);
    expect(consoleSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read.`);
    consoleSpy.mockRestore();
  });
});
