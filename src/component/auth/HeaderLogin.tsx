import styled from '@emotion/styled';
import { Button, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContainer } from '../../containers/AuthContainer';
import { PATH } from '../../routes/constant';

const HeaderUserName = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgba(107, 114, 128, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 1rem;
`;

export function HeaderLogin() {
  const { userInfo, signOut } = AuthContainer.useContainer();

  const onLogOut = () => {
    signOut();
  };

  const navigate = useNavigate();

  return (
    <Row justify="end" align="middle">
      {userInfo.name ? (
        <>
          <HeaderUserName>{userInfo.name} 님</HeaderUserName>
          <Button type="default" onClick={onLogOut}>
            로그아웃
          </Button>
        </>
      ) : (
        <Button type="default" onClick={() => navigate(PATH.LOGIN)}>
          로그인
        </Button>
      )}
    </Row>
  );
}
