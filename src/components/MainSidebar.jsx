import React from 'react';
import {
  Menu,
  DatePicker,
  Form,
  Divider,
  Layout,  // Already imported
 
} from 'antd';
import { 
  UserOutlined, 
  SettingOutlined, 
  LogoutOutlined,
  DashboardOutlined,
  CalendarOutlined,
  UnorderedListOutlined,
  
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const Sidebar = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <Sider 
        width={250} 
        style={{ 
          background: '#fff',
          boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)'
        }}
      >
        <div style={{ padding: '24px', textAlign: 'center' }}>
          <h2 style={{ color: '#3B82F6', margin: 0 }}>T360</h2>
        </div>
        
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="3" icon={<UnorderedListOutlined />}>
            Etudes
          </Menu.Item>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Calendrier
          </Menu.Item>
          <Menu.Item key="5" icon={<UnorderedListOutlined />}>
            To-Do
          </Menu.Item>
          <Menu.Item key="6" icon={<UnorderedListOutlined />}>
            Les demandes
          </Menu.Item>
          <Divider />
          <Menu.Item key="7" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="8" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
  );
};
export default Sidebar;