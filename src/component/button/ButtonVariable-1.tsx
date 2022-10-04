import styled from '@emotion/styled';

interface ButtonFixProps {
  children: string;
  color?: string;
  backgroundColor?: string;
}

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: ${(props: ButtonFixProps) => props.color || 'gray'};
  background-color: ${(props: ButtonFixProps) => props.backgroundColor || 'white'};
`;

function ButtonVariable1({ children, color, backgroundColor }: ButtonFixProps) {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
}

export default ButtonVariable1;
