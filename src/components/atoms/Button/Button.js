import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${({ bg }) => bg};
  width: 25px;
  height: 25px;
  padding: 0.4rem;
  border-radius: 100%;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  &:last-child {
    margin-bottom: 0;
  }
`;
