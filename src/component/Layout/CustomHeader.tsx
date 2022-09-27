import styled from '@emotion/styled';
import { Button, Col, Layout, Row } from 'antd';
import React, { ReactNode } from 'react';

import { AuthContainer } from '../../containers/AuthContainer';

interface MainHeaderProps {
  children?: ReactNode;
}

const { Header } = Layout;

const HeaderUserName = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgba(107, 114, 128, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 1rem;
`;

export function CustomHeader({ children }: MainHeaderProps) {
  const { userInfo, signOut } = AuthContainer.useContainer();
  const onLogOut = () => {
    signOut();
  };

  const NoPaddingHeader = styled(Header)`
    padding: 0 1rem;
  `;

  return (
    <NoPaddingHeader>
      <Row justify="space-between" style={{ height: '100%', position: 'relative' }} align="middle">
        <Col>{children}</Col>
        <Col>
          <Row justify="end" align="middle">
            {!userInfo.name || (
              <>
                <HeaderUserName>{userInfo.name} 님</HeaderUserName>
                <Button type="default" onClick={onLogOut}>
                  로그아웃
                </Button>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </NoPaddingHeader>
  );
}
