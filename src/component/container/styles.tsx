// props 분리 - 동적 스타일링 : index.tsx에서 지정
import styled from '@emotion/styled';

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
