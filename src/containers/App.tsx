import './App.css';

import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { CustomHeader } from '../component/Layout/CustomHeader';
import { NotFound } from '../component/NotFound';
import SearchInputBox from '../component/SearchInputBox';
import LoginPage from '../pages/auth/LoginPage';
import HomePage from '../pages/home/HomePage';
import MovieDetailPage from '../pages/movie/MovieDetailPage';
import MovieList from '../pages/movie/MovieListPage';
import { PATH } from '../routes/constant';
import { AuthContainer } from './AuthContainer';
import ComponentPreview from './ComponentPreview';
import Test from './UnstatedNextSample';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <AuthContainer.Provider>
        <Layout id="components-layout-demo-top" className="layout" style={{ minHeight: '100vh' }}>
          <CustomHeader>
            <Link to={PATH.HOME}>
              <div className="logo" />
            </Link>
            <SearchInputBox />
          </CustomHeader>
          <Content style={{ padding: '0 50px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/movie/:id" element={<MovieDetailPage />} />
              <Route path="/movie/list" element={<MovieList />} />

              <Route path="/component" element={<ComponentPreview />} />
              <Route path="/test" element={<Test />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </AuthContainer.Provider>
    </Router>
  );
}

export default App;
