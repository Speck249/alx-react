import React from 'react';

const NotificationItem = ({ type, value, html }) => {
  return (
    <>
      <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}>
        {value}
      </li>
    </>
  );
};

export default NotificationItem;
