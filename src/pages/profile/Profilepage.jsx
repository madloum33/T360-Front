import { useState } from 'react';
import { 
  Layout, 
  Input, 
  DatePicker, 
  Select, 
  Button, 
  Avatar, 
  Form, 
  Card,
  Row,
  Col,
  Upload,
  message
} from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import './Profilepage.css';
import { useTheme } from '../../contexts/ThemeContext';
const { Content } = Layout;
const { Option } = Select;

const ProfilePage = () => {
   const { isLightMode } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: 'Homme'
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    message.success('Profile updated successfully!');
  };

  const uploadProps = {
    beforeUpload: file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      return isJpgOrPng;
    },
    showUploadList: false,
    onChange: info => {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      }
    },
  };

  return (
    <Layout className={isLightMode? 'layout-light':'layout-dark'}>
      <Content className={isLightMode ? 'content-light' : 'content-dark'}>
        <Card 
          title={<span className={isLightMode ? 'card-title-light' : 'card-title-dark'}>Profile</span>}
          bordered={false} className={isLightMode ? "card-light" : "card-dark"}
        >
          <Row justify="center" style={{ marginBottom: 24 }}>
            <Col>
              <Upload {...uploadProps}>
                <div style={{ textAlign: 'center' }}>
                  <Avatar 
                    size={100} 
                    icon={<CameraOutlined />}
                    style={{ backgroundColor: '#f0f2f5', marginBottom: 8 }}
                  />
                  <Button type="link">Charger une photo</Button>
                </div>
              </Upload>
            </Col>
          </Row>

          <Form layout="vertical" onSubmit={handleSubmit}>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Prénom" className={isLightMode ? 'form-Item-light' : 'form-Item-dark'}>
                  <Input 
                    placeholder="Entrez votre prénom"
                    value={formData.firstName}
                    onChange={e => handleChange('firstName', e.target.value)}
                    className={isLightMode ? "input-light":'input-dark'}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Nom">
                  <Input
                    placeholder="Entrez votre nom"
                    value={formData.lastName}
                    onChange={e => handleChange('lastName', e.target.value)}
                    className={isLightMode ? "input-light":'input-dark'}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Email">
                  <Input
                    type="email"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className={isLightMode ? "input-light":'input-dark'}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Téléphone">
                  <Input
                    type="tel"
                    placeholder="Entrez votre numéro de téléphone"
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className={isLightMode ? "input-light":'input-dark'}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Date de naissance">
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Sélectionnez une date"
                    onChange={(date, dateString) => handleChange('birthDate', dateString)}
                    className={isLightMode ? "input-light":'input-dark'}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Genre">
                <Select
                  value={formData.gender}
                  onChange={value => handleChange('gender', value)}
                  className={isLightMode ? "select-light" : "select-dark"}
                  dropdownClassName={isLightMode ? "" : "select-dropdown-dark"}
                >
                  <Option value="Homme">Homme</Option>
                  <Option value="Femme">Femme</Option>
                </Select>

                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ textAlign: 'center', marginTop: 32 }}>
              <Button 
                type="primary" 
                htmlType="submit"
                size="large"
                style={{ width: 200 }}
              >
                Enregistrer
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProfilePage;