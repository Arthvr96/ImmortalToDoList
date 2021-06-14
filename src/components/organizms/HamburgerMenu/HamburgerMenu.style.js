import styled from 'styled-components';
import media from 'helpers/media';

export const Wrapper = styled.nav`
  ${media.laptop`
    display: none;
  `}
`;
