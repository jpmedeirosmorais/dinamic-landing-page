import styled from 'styled-components';
import { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, light }) => css`
    color: ${light ? theme.colors.primary : theme.colors.white};
    font-family: ${theme.fonts.family.montserrat};
  `}
`;
