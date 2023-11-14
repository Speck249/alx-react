import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

class NotificationItem extends React.Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, html = '__html', value } = this.props;

    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }} onClick={this.handleClick}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
