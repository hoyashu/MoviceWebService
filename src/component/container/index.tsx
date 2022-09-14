// src/component/container/index.tsx
import React from 'react';
import * as S from './styles';

interface ContainerProps {
    children: React.ReactNode;
}

// styled-components 사용
// 명시해준 CSS가 종속됨
function Container({ children }: ContainerProps) {
  return (
    <S.Container display>
      <S.ContainerImage src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cjBn/image/cc7TqA9PyQp4kFKo7YT6mjNijcM.jpg" />
      {children}
    </S.Container>
  );
}

export default Container;
