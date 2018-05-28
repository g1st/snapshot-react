import React from 'react';
import PropTypes from 'prop-types';

import { MainButton } from './styled';

const propTypes = {
  title: PropTypes.string
};

const defaultProps = { title: 'Click Me' };

const Button = ({ title }) => {
  return <MainButton>{title}</MainButton>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
