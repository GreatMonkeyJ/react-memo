import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Buttons.scss';

const Buttons = props => {
  let buttonElement;

  switch (props.type) {
    case 'link':
      buttonElement = <a {...props}>{props.children}</a>;
      break;
    case 'button':
      buttonElement = <button {...props}>{props.children}</button>;
      break;
    default:
      return null;
  }

  return buttonElement;
}

Buttons.propTypes = {
  type: PropTypes.string.isRequired
}

export default Buttons;