import PropTypes from 'prop-types';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  __html: PropTypes.shape({
    PropTypes.string,
  });
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});
