import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styled';
import { getButtonWrapperProps } from './helpers';

const Button = ({ type, children }) => {
  const buttonClasses = '';

  return (
    <ButtonWrapper {...getButtonWrapperProps(type)}>
      {children}
    </ButtonWrapper>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
