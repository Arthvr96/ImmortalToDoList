import styled from 'styled-components';
import media from 'helpers/media';

export const LogoWrapper = styled.div`
  ${media.laptop`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #2d2e2d;
  `}
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
