import styled from 'styled-components';
import { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.colors.mainBg};
  `}
`;
