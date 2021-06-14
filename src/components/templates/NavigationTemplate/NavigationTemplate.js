import React, { useContext } from 'react';
import { GlobalContext } from 'providers/GlobalContextProvider';
import PropTypes from 'prop-types';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecues/NavList/NavList';
import HamburgerMenu from 'components/organizms/HamburgerMenu/HamburgerMenu';
import { Wrapper, Navigation, Content } from './NavigationTemplate.style';

const NavigationTemplate = ({ children }) => {
  const { height } = useContext(GlobalContext);

  return (
    <Wrapper height={height}>
      <HamburgerMenu />
      <Navigation>
        <Logo />
        <NavList />
      </Navigation>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default NavigationTemplate;

NavigationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
