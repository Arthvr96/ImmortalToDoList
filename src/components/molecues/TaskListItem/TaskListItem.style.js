import styled from 'styled-components';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 1rem 1.5rem;
  background-color: ${({ color }) => color};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.65);
  border-radius: 15px;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: column;
`;
