import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

const NotificationItem = ({ type, html = '__html', value }) => {
  return (
    <li data-notification-type={type}
      dangerouslySetInnerHTML={{ __html: html }}>{value}</li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
