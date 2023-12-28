import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #e1003c',
    padding: '1.2em',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: '20px',
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  closeIcon: {
    display: 'inline',
    width: '7px',
    height: '8px',
    margin: '0',
    padding: '0',
  },
  listItem: {
    fontFamily: "'Times New Roman', Times, serif",
  },
  defaultListItem: {
    color: 'blue',
  },
  urgentListItem: {
    color: '#e1003c',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read.`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div className={css(styles.notifications)}>
        {listNotifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          <>
            <p>Here are the notifications:</p>
            <ul className={css(styles.ul)}>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  id={notification.id}
                  className={css(
                    styles.listItem,
                    notification.type === 'default' ? styles.defaultListItem : styles.urgentListItem
                  )}
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
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
