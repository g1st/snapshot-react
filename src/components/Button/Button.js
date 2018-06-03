import React from 'react';
import PropTypes from 'prop-types';

import { MainButton } from './styled';

const propTypes = {
  title: PropTypes.string,
  big: PropTypes.bool
};

const defaultProps = { title: 'Click Me', big: true };

const Button = ({ title, big }) => {
  return <MainButton fullSpan={big}>{title}</MainButton>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
