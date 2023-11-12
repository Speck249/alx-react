import React from 'react';
import close from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js'; // Assuming the correct path to NotificationItem.js

function Notifications() {
  return (
    <div className='menuItem'>
      <p>Your notifications</p>
    </div>
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
}

export default Notifications;
