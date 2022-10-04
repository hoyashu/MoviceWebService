import styled from '@emotion/styled';
import { Button, Col, Layout, Row } from 'antd';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { AuthContainer } from '../../containers/AuthContainer';
import { PATH } from '../../routes/constant';
import { HeaderLogin } from '../auth/HeaderLogin';

interface MainHeaderProps {
  children?: ReactNode;
}

const { Header } = Layout;

export function CustomHeader({ children }: MainHeaderProps) {
  const { userInfo } = AuthContainer.useContainer();

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
        <Link to={PATH.HOME}>
          <Col>{children}</Col>
        </Link>
        <Col>
          <HeaderLogin />
        </Col>
      </FullRow>
    </NoPaddingHeader>
  );
}
