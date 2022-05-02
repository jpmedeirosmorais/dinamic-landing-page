import P from 'prop-types';
import * as S from './styles';

export const Heading = ({ children, light = false }) => {
  return <S.Title light={light}>{children}</S.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
