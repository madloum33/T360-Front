import React from 'react';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined,
  SunOutlined,
  MoonOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography, Select, Avatar, Dropdown, Badge, Switch, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './sidebar.css';

const { Text } = Typography;
const { Option } = Select;
const { Header } = Layout;

const TopBar = () => {
  const { isLightMode, toggleTheme } = useTheme(); 
  const navigate = useNavigate();

  const menu = (
    <Menu className={isLightMode ? 'menu-dropdown-light' : 'menu-dropdown-dark'}>
      <Menu.Item key="1" icon={<UserOutlined />} className={isLightMode ? 'menu-item-light' : 'menu-item-dark'}>Profile</Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />} className={isLightMode ? 'menu-item-light' : 'menu-item-dark'}>Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />} className={isLightMode ? 'menu-item-light' : 'menu-item-dark'}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className={isLightMode ? 'header-light' : 'header-dark'}>
      <div className="topbar-container">
        {/* Logo */}
        <div className="logo-container">
          <Text className="logo-main">
            T<span className={isLightMode ? 'logo-sub-light' : 'logo-sub-dark'}>360</span>
          </Text>
        </div>

        <div className="topbar-right">
          <Badge count={3} size="small">
            <BellOutlined className="bell-icon" />
          </Badge>

          <Select
            defaultValue="fr"
            className={isLightMode ? 'select-light' : 'select-dark'}
            dropdownClassName={isLightMode ? 'dropdown-light' : 'select-dropdown-dark'}
            bordered={false}
            suffixIcon={null}
          >
            <Option value="fr">🇫🇷 Français</Option>
            <Option value="en">🇬🇧 English</Option>
          </Select>

          <Divider type="vertical" className="divider" />

          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            checked={isLightMode}
            onChange={toggleTheme}
          />

          <span className={isLightMode ? 'role-light' : 'role-dark'}>Enquêteur</span>

          <Dropdown overlay={menu} placement="bottomRight" arrow  className={isLightMode ? 'dropdown-light' : 'dropdown-dark'}>
            <div >
              <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" icon={<UserOutlined  className={isLightMode ? 'dropdown-icon-light' : 'dropdown-icon-dark'}/>} />
              <DownOutlined className={isLightMode ? 'dropdown-icon-light' : 'dropdown-icon-dark'} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
