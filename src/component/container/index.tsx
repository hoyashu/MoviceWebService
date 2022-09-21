import React from 'react';

import * as S from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

// styled-components 사용
// 명시해준 CSS가 종속됨
function Container({ children }: ContainerProps) {
  return <S.Container display>{children}</S.Container>;
}

export default Container;
