import React from 'react';
import {
  DatePicker,
  Form,
  Divider,
  Layout,
  Input, 
  Select, 
  Avatar,
  Dropdown,
  Menu
} from 'antd';
import { 
  UserOutlined,
  SearchOutlined,
  LogoutOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Option } = Select;

const TopBar = () => {
  const [form] = Form.useForm();
  
  // Avatar dropdown menu
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ 
      background: '#fff', 
      padding: '0 24px',
      height: 70,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <Input
          placeholder="Recherche"
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
        />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Select 
          defaultValue="fr" 
          style={{ width: 120 }}
          bordered={false}
          suffixIcon={null}
        >
          <Option value="fr">
            <span role="img" aria-label="French">🇫🇷</span> Français
          </Option>
          <Option value="en">
            <span role="img" aria-label="English">🇬🇧</span> English
          </Option>
        </Select>
        
        <Divider type="vertical" style={{ height: 24, margin: 0 }} />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 500 }}>XXX Enqueteur</span>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              icon={<UserOutlined />}
              style={{ cursor: 'pointer' }}
            />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default TopBar;