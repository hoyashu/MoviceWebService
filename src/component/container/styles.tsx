// src/component/container/styles.tsx
import styled from 'styled-components/macro';

// props 분리 - 동적 스타일링 : index.tsx에서 지정
interface ContainerProps {
  display?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 200px;
  display: ${(props: ContainerProps) => (props.display ? 'block' : 'none')};
`;

export const ContainerImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;
