import './App.css';

import { Layout, Menu } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ComponentPreview from './ComponentPreview';
import Home from './Home';
import Login from './Login';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout id="components-layout-demo-top" className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/movie/list" element={<MovieList />} />

            <Route path="/component" element={<ComponentPreview />} />
          </Routes>
        </Router>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
