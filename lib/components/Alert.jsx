import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ className }) => (
  <div className={className}>Hello Alert</div>
);

Alert.propTypes = {
  className: PropTypes.string,
};

export default Alert;
