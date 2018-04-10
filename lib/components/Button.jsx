import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import '../less/button.less';

const Button = ({ type, children }) => {
  const buttonClasses = cx('button', {
    'button--primary': type === 'primary',
    'button--success': type === 'success',
    'button--danger': type === 'danger',
    'button--warning': type === 'warning',
    'button--info': type === 'info',
  });

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
