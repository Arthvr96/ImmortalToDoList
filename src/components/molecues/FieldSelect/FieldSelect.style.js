import styled from 'styled-components';
import { Field } from 'formik';

export const StyledFieldOption = styled(Field)`
  width: 100%;
  padding: 0.3rem 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 15px;
`;
