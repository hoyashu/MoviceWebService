import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import { createContainer } from 'unstated-next';

import { PATH } from '../routes/constant';
import { MovieDetailProps } from './MovieDetail';

export type UserInfoProps = {
  name: string;
  id: string;
  pwd: string;
  gender: string;
};

const initUserInfo: UserInfoProps = {
  name: '',
  id: '',
  pwd: '',
  gender: '',
};

// 전역으로 사용될 것
const useAuthContainer = () => {
  // 로그인 상태
  const [isLogin, setIsLogin] = useState(false);
  // 회원 정보
  const [userInfo, setUserInfo] = useState<UserInfoProps>(initUserInfo);

  const navigate = useNavigate();

  // 세션 셋팅
  const setSessionUserInfo = (userId: UserInfoProps) => {
    sessionStorage.setItem('token', 'randem010');
    sessionStorage.setItem('userId', userId.id);
    sessionStorage.setItem('userPwd', userId.pwd);
    sessionStorage.setItem('userName', userId.name);
  };

  // 세션 확인
  const sessionToken = () => sessionStorage.getItem('token');

  // 세션 삭제
  const removeSessionUserInfo = () => sessionStorage.clear();

  // DB에서 회원정보 가져오기
  const getUserInfo = async (userInfoP: UserInfoProps) => {
    const promise = new Promise<UserInfoProps>((resolve, reject) => {
      // DB 작동
      setTimeout(() => {
        // 임시 비교 데이터
        const userInfoDB = {
          name: '김소진',
          id: 'admin',
          pwd: '1234',
          gender: 'F',
        };

        if (userInfoDB.id === userInfoP.id && userInfoDB.pwd === userInfoP.pwd) {
          // 전역 변수로 사용될 회원 정보
          setUserInfo(userInfoDB);

          // 로그인 상태 변경
          setIsLogin(true);

          resolve(userInfoDB);
        } else {
          reject(new Error('회원 정보가 없습니다.'));
        }
      }, 1000);
    });
    // 회원정보
    const result = await promise;
    return result;
  };

  // 실제 로그인 처리
  const loginMutate = async (userInfoP: UserInfoProps) => {
    let result = initUserInfo;
    try {
      // await로 promise의 반환값을 기다렸다 result에 할당
      const thisUserInfo = await getUserInfo(userInfoP);
      // 일치하는 회원 정보가 있는 경우
      if (thisUserInfo) {
        result = thisUserInfo;
        // 세션 저장
        setSessionUserInfo(thisUserInfo);
      }
    } catch (e) {
      // 에러처리를 어떻지 해야할지 모르겠다..!
      console.log(e);
    }
    return result;
  };

  // 로그인 페이지에서 로그인 시도
  const onSubmitLogin = async (userInfoP: UserInfoProps) => {
    // 결과에 따른 모달 처리
    const thisUserInfo: UserInfoProps = await loginMutate(userInfoP);

    if (thisUserInfo.id !== '') {
      Modal.success({
        content: `반가워요! ${thisUserInfo.name}님 :)`,
      });
      // 메인으로 이동
      navigate(PATH.HOME);
    } else {
      // 실패시 moal
      Modal.error({
        content: '아이디/비밀번호를 다시 확인해주세요!',
      });
    }
  };

  // 로그아웃 함수
  const signOut = () => {
    // 전역 변수로 사용될 회원 정보
    setUserInfo(initUserInfo);
    // 로그아웃 처리
    setIsLogin(false);
    // 세션 삭제
    removeSessionUserInfo();
  };

  // 로그인 값이 변할 때 작동 할 것
  useEffect(() => {
    // 세션에 토큰이 남이 있는 경우 = 로그인 한 상태
    const token = sessionToken();
    if (token !== '' && !isLogin) {
      // 회원 정보 가져오기
      setIsLogin(true);
    }
  }, [isLogin]);

  return {
    signOut,
    loginMutate,
    onSubmitLogin,
    userInfo,
    isLogin,
  };
};

export const AuthContainer = createContainer(useAuthContainer);
