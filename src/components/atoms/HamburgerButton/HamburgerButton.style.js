import styled, { css } from 'styled-components';

export const MixinHamburgerSpanPseudo = css`
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  background: ${({ isOpen, theme: { colors } }) => (isOpen ? colors.white : colors.black)};
  transition: transform 0.3s ease-in-out, background 0.2s ease-in-out;
`;

export const Hamburger = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  width: 30px;
  height: 25px;
  background-color: unset;
  border: unset;
  cursor: pointer;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 3px;
    transform: translateY(-50%);
    background: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.colors.black)};
    transition: background 0.3s ease-in-out;

    &::before {
      ${MixinHamburgerSpanPseudo}
      top: -10px;
      transform: ${({ isOpen }) =>
        isOpen ? 'translateY(10px) rotate(45deg)' : 'translateY(0px) rotate(0deg)'};
    }
    &::after {
      ${MixinHamburgerSpanPseudo}
      bottom: -10px;
      transform: ${({ isOpen }) =>
        isOpen ? 'translateY(-10px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)'};
    }
  }
`;
