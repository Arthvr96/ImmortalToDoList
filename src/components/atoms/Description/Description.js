import styled from 'styled-components';

export const Description = styled.p`
  max-width: 65vw;
  margin: 1rem 0 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${({ isOpen }) => (isOpen ? 'block' : '-webkit-box')};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
