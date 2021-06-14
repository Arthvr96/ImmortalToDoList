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
