import styled from 'styled-components';

export const TextInput = styled.input`
  width: 100%;
  padding: 0.3rem 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 15px;
`;
