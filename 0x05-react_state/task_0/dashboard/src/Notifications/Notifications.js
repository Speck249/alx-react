import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read.`);
  }

  render() {
    const { listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className='Notifications'>
        <button onClick={handleDisplayDrawer}>Your notifications</button>
        <button onClick={handleHideDrawer}>Close</button>
        {listNotifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          <>
            <p>Here are the notifications:</p>
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  id={notification.id}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      html: PropTypes.string,
    })
  ),
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
