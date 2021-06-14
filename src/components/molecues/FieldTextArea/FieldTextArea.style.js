import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.3rem 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 15px;
`;
