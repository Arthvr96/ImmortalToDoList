import styled from 'styled-components';

export const ButtonReadMore = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  background-color: transparent;
`;
