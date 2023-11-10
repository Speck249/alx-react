import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  it('renders correct html based on type and value props', () => {
    const { container } = render(<NotificationItem type="default" value="test" />);
    expect(container.innerHTML).toContain('<li data-notification-type="default">test</li>');
  });

  it('renders correct html based on html prop', () => {
    const { container } = render(
      <NotificationItem html={{ __html: '<u>test</u>' }} type="default" value="test" />
    );
    expect(container.innerHTML).toContain('<li data-notification-type="default"><u>test</u>test</li>');
  });
});
