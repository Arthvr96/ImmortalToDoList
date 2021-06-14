import styled from 'styled-components';

export const TitleHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3rem;
`;
