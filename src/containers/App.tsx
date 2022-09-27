import './App.css';

import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CustomHeader } from '../component/Layout/CustomHeader';
import SearchInputBox from '../component/SearchInputBox';
import { AuthContainer } from './AuthContainer';
import ComponentPreview from './ComponentPreview';
import Home from './Home';
import Login from './Login';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';
import Test from './UnstatedNextSample';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <AuthContainer.Provider>
        <Layout id="components-layout-demo-top" className="layout" style={{ minHeight: '100vh' }}>
          <CustomHeader>
            <div className="logo" />
            <SearchInputBox />
          </CustomHeader>
          <Content style={{ padding: '0 50px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/movie/list" element={<MovieList />} />

              <Route path="/component" element={<ComponentPreview />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </AuthContainer.Provider>
    </Router>
  );
}

export default App;
