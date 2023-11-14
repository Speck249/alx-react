import React from 'react';
import close from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js'; 
import PropTypes from 'prop-types';

function Notifications({ displayDrawer, listNotifications }) {
  if (listNotifications.length === 0) {
    <div>
      <p>No new notification for now</p>
    </div>
  } else if (listNotifications.length >= 1) {
    {listNotifications.map(notification => (
      <NotificationItem
        key={notification.id}
	html={notification.html}
	type={notification.type}
	value={notification.value}
      />
    ))};

  if (displayDrawer === true) {
    return (
      <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button className='close-icon' aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
          <img src={close} alt='close icon' />
        </button>
        <ul>
          <NotificationItem data='default'>New course available</NotificationItem>
          <NotificationItem data='urgent'>New resume available</NotificationItem>
          <NotificationItem data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    );
  } else {
    return (
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.PtopTypes = {
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
