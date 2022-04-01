import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${({ height, isOpen }) => (isOpen ? height : '0')}px;
  overflow-y: hidden;
  transition: height 0.3s ease-in-out;
`;

export const DropDown = styled.button`
  display: block;
  position: relative;
  width: 85vw;
  background-color: transparent;
  border: unset;
  margin: 2rem 0 2.5rem 1rem;
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  left: 0;
  top: -2px;
`;

export const Arrow = styled.span`
  display: block;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  right: -1px;
  top: -12px;
`;

export const Content = styled.span`
  display: block;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  left: 50%;
  transform: translateX(calc(-50% - 10px));
  top: -10px;
`;
