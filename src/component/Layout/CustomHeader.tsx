import styled from '@emotion/styled';
import { Col, Layout, Row } from 'antd';
import React, { ReactNode } from 'react';

import { HeaderLogin } from '../auth/HeaderLogin';

interface MainHeaderProps {
  children?: ReactNode;
}

const { Header } = Layout;

export function CustomHeader({ children }: MainHeaderProps) {
  const NoPaddingHeader = styled(Header)`
    padding: 0 1rem;
  `;

  const FullRow = styled(Row)`
    height: 100%;
    position: relative;
  `;

  return (
    <NoPaddingHeader>
      <FullRow justify="space-between" align="middle">
        <Col>{children}</Col>
        <Col>
          <HeaderLogin />
        </Col>
      </FullRow>
    </NoPaddingHeader>
  );
}
