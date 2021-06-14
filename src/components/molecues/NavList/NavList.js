import React from 'react';
import PropTypes from 'prop-types';
import { Nav, StyledLink } from './NavList.style';

const NavList = ({ isOpen, handleClick }) => (
  <Nav isOpen={isOpen}>
    <li>
      <StyledLink onClick={handleClick} to="/">
        To do list
      </StyledLink>
    </li>
    <li>
      <StyledLink onClick={handleClick} to="/addTask">
        Add Task
      </StyledLink>
    </li>
  </Nav>
);

export default NavList;

NavList.propTypes = {
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
};
