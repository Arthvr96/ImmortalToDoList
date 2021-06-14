import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CardTemplate.style';

const CardTeplate = ({ children }) => <Wrapper>{children}</Wrapper>;

export default CardTeplate;

CardTeplate.propTypes = {
  children: PropTypes.node,
};
