import styled from 'styled-components';

export const PopUpAlertWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ isVisible }) => (isVisible ? '5000' : '-1')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${({ height }) => height}px;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: ${({ isVisible }) =>
    isVisible ? 'opacity 0.3s ease-in-out' : 'opacity 0.3s 0.1s ease-in-out'};
`;

export const Alert = styled.div`
  width: 80vw;
  background: #fff;
  padding: 2.5rem 0;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  text-align: center;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0);' : 'translateY(50%);')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;
