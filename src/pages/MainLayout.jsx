import React from 'react';
import { Layout } from 'antd';
import MainNavBar from '../components/MainNavBar';
import MainTopbar from '../components/MainTopBar';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainTopbar />
      <Layout>
        <MainNavBar />
        <Content style={{ margin: '24px', padding: '24px', background: '#fff' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;