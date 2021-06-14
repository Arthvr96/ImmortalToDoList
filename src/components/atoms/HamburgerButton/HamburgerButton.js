import React from 'react';
import PropTypes from 'prop-types';
import { Hamburger } from './HamburgerButton.style';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <Hamburger isOpen={isOpen} onClick={onClick}>
      <div>
        <span />
      </div>
    </Hamburger>
  );
};

export default HamburgerButton;

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
