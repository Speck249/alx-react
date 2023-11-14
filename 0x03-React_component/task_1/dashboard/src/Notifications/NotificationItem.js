import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

const NotificationItem = ({ type, html = '__html', value }) => {
  return (
    <li data-notification-type={type}
      dangerouslySetInnerHTML={{ __html: html }}
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: default,
};

export default NotificationItem;
