import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'helpers/media';

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 500;
  top: 0;
  right: -100vw;
  list-style: none;
  background-color: #2d2e2d;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-100vw)' : 'translateX(0vw)')};
  transition: transform 0.3s ease-in-out;

  ${media.laptop`
  width: fit-content;
  height: fit-content;
  position: static;
  margin-top: 2rem;
  background-color: unset;
  `}

  li {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;

    ${media.laptop`
      justify-content: flex-end;
      margin: 1.5rem 1rem 0 0;
    `}
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
  text-align: right;
  cursor: pointer;

  ${media.laptop`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.black};
  `}
`;
