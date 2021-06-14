import styled from 'styled-components';
import media from 'helpers/media';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: ${({ height }) => height}px;
`;
export const Navigation = styled.nav`
  display: none;

  ${media.laptop`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20vw;
  max-width: 15rem;
  height: 100%;
  border-right: 1px solid black;
  `}
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
`;
