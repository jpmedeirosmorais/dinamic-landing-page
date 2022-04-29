import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
  `}
`;
