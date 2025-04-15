import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    switch (key) {
      case '1':
        navigate('/profile'); // Redirige vers la page "Profile"
        break;
      case '2':
        navigate('/dashboard'); // Redirige vers la page "Dashboard"
        break;
      case '3':
        navigate('/etudes'); // Redirige vers la page "Etudes"
        break;
      case '4':
        navigate('/calendrier'); // Redirige vers la page "Calendrier"
        break;
      case '5':
        navigate('/todo'); // Redirige vers la page "To-Do"
        break;
      case '6':
        navigate('/demandes'); // Redirige vers la page "Les demandes"
        break;
      case '7':
        navigate('/chat'); // Redirige vers la page "Chat"
        break;
      case '8':
        navigate('/etudes'); // Redirige vers une autre page "Etudes"
        break;
      case '9':
        navigate('/enqueteurs'); // Redirige vers la page "Les enquêteurs"
        break;
      case '10':
        navigate('/clients'); // Redirige vers la page "Les clients"
        break;
      case '11':
        navigate('/materiels'); // Redirige vers la page "Les matériels"
        break;
      case '12':
        navigate('/settings'); // Redirige vers la page "Settings"
        break;
      case '13':
        navigate('/logout'); // Redirige vers la page "Logout"
        break;
      default:
        console.log('Clé non reconnue :', key); // Gestion des clés non reconnues
    }
  };

  return (
    <Sider
      width={250}
      style={{
        background: '#fff',
        boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)',
      }}
    >
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <h2 style={{ color: '#3B82F6', margin: 0 }}>T360</h2>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ borderRight: 0 }}
        onClick={(e) => handleMenuClick(e.key)} // Gestion des clics
      >
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2">Dashboard</Menu.Item>
        <Menu.Item key="3">Etudes</Menu.Item>
        <Menu.Item key="4">Calendrier</Menu.Item>
        <Menu.Item key="5">To-Do</Menu.Item>
        <Menu.Item key="6">Les demandes</Menu.Item>
        <Menu.Item key="7">Chat</Menu.Item>
        <Menu.Item key="8">Etudes</Menu.Item>
        <Menu.Item key="9">Les enquêteurs</Menu.Item>
        <Menu.Item key="10">Les clients</Menu.Item>
        <Menu.Item key="11">Les matériels</Menu.Item>
        <Menu.Item key="12">Settings</Menu.Item>
        <Menu.Item key="13">Logout</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;