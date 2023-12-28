import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css, keyframes } from 'aphrodite';
import NotificationItem from './NotificationItem';

const opacityFrames = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceFrames = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

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
  menuItem: {
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animationName: [opacityFrames, bounceFrames],
    animationDuration: '1s, 0.5s',
    animationIterationCount: '3, 3',
  },
  hideMenuItem: {
    display: 'none',
  },
});

class Notifications extendsReact.Component {
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
    const showMenuItem = listNotifications.length === 0;

    return (
      <div className={css(styles.notifications)}>
        <div className={css(styles.menuItem, showMenuItem && styles.hideMenuItem)}>
          Menu Item
        </div>
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
