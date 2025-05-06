import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  ReadOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  FileTextOutlined,
  MessageOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  ToolOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import './sidebar.css';
import { useTheme } from '../contexts/ThemeContext';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
  const navigate = useNavigate();
  const { isLightMode } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (e) => {
    const key = e.key;
    const routes = {
      1: '/profile',
      2: '/dashboard',
      3: '/etudes',
      4: '/calendar',
      5: '/todo',
      6: '/demandes',
      7: '/chat',
      8: '/enqueteurs',
      9: '/clients',
      10: '/materials',
      11: '/settings',
      12: '/logout',
    };
    if (routes[key]) navigate(routes[key]);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={isLightMode ? 'sider-light' : 'sider-dark'}
    >
      <div className={`sider-toggle ${isLightMode ? 'toggle-icon-light' : 'toggle-icon-dark'}`}>
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={() => setCollapsed(false)}
            className={isLightMode ? 'dropdown-icon-light' : 'dropdown-icon-dark'} 
          />
        ) : (
          <MenuFoldOutlined
            onClick={() => setCollapsed(true)}
            className={isLightMode ? 'dropdown-icon-light' : 'dropdown-icon-dark'} 
          />
        )}
      </div>


      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className={isLightMode ? 'menu-light' : 'menu-dark'}
        onClick={handleMenuClick}
      >
        <Menu.Item key="1" icon={<UserOutlined />} >Profile</Menu.Item>
        <Menu.Item key="2" icon={<DashboardOutlined />} >Dashboard</Menu.Item>
        <Menu.Item key="3" icon={<ReadOutlined />} >Etudes</Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />} >Calendrier</Menu.Item>
        <Menu.Item key="5" icon={<CheckSquareOutlined />} >To-Do</Menu.Item>
        <Menu.Item key="6" icon={<FileTextOutlined />} >Les demandes</Menu.Item>
        <Menu.Item key="7" icon={<MessageOutlined />} >Chat</Menu.Item>
        <Menu.Item key="8" icon={<TeamOutlined />} >Les enquêteurs</Menu.Item>
        <Menu.Item key="9" icon={<UsergroupAddOutlined />} >Les clients</Menu.Item>
        <Menu.Item key="10" icon={<ToolOutlined />} >Les matériels</Menu.Item>
        <Menu.Item key="11" icon={<SettingOutlined />} >Paramètres</Menu.Item>
        <Menu.Item key="12" icon={<LogoutOutlined />} >Déconnexion</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
