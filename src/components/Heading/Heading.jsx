import P from 'prop-types';
import * as S from './styles';

export const Heading = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
