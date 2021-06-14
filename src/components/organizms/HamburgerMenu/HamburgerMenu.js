import React, { useState } from 'react';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import NavList from 'components/molecues/NavList/NavList';
import { Wrapper } from './HamburgerMenu.style';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <HamburgerButton isOpen={isOpen} onClick={handleClick} />
      <NavList isOpen={isOpen} handleClick={handleClick} />
    </Wrapper>
  );
};

export default HamburgerMenu;
