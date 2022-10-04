import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonFixProps {
  children: string;
  outline?: string;

  primary?: boolean;
  danger?: boolean;
  success?: boolean;
}

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;

  border: ${(props: ButtonFixProps) => (props.outline === 'dotted' ? '3px dotted lightgray' : '1px solid lightgray')};

  ${(props: ButtonFixProps) => {
    return [
      props.primary &&
        css`
          color: white;
          background-color: navy;
          border-color: navy;
        `,
      props.danger &&
        css`
          color: white;
          background-color: red;
          border-color: red;
        `,
      props.success &&
        css`
          color: white;
          background-color: skyblue;
          border-color: skyblue;
        `,
    ];
  }}
`;

function ButtonVariable2({ children, ...props }: ButtonFixProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default ButtonVariable2;
