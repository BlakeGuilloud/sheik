import {
  colorPrimary,
  colorSuccess,
  colorDanger,
  colorWarning,
  colorInfo,
} from '../variables';

export const getButtonWrapperProps = (type) => {
  let buttonProps = {
    color: 'white',
  };

  switch (type) {
    case 'primary':
      buttonProps = Object.assign(buttonProps, {
        backgroundColor: colorPrimary,
      });
      break;
    case 'success':
      buttonProps = Object.assign(buttonProps, {
        backgroundColor: colorSuccess,
      });
      break;
    case 'danger':
      buttonProps = Object.assign(buttonProps, {
        backgroundColor: colorDanger,
      });
      break;
    case 'warning':
      buttonProps = Object.assign(buttonProps, {
        backgroundColor: colorWarning,
        color: 'black',
      });
      break;
    case 'info':
      buttonProps = Object.assign(buttonProps, {
        backgroundColor: colorInfo,
      });
      break;
    default:
      return {
        color: 'black',
        backgroundColor: 'white',
      };
  }

  return buttonProps;
};

