import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

interface ButtonFixProps {
  children: string;
}

// <button> HTML 엘리먼트에 Styled Components가 자동으로 생성해준 클래스 이름이 적용되었음
function ButtonFix({ children }: ButtonFixProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default ButtonFix;
