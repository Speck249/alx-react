import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
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

const NotificationItem = React.memo(function NotificationItem({
  id,
  type,
  html = '__html',
  value,
  markAsRead
}) {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li
      className={css(
        styles.listItem,
        type === 'default' ? styles.defaultListItem : styles.urgentListItem
      )}
      data-notification-type={type}
      dangerouslySetInnerHTML={{ __html: html }}
      onClick={handleClick}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired
};

export default NotificationItem;
