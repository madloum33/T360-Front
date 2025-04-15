import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Form, Input, Button, Checkbox, Typography, Card, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import './LogIn.css';
const { Title, Text } = Typography;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      
      const username = values.username?.trim();
      const password = values.password?.trim();
      
      if (!username || !password) {
        message.warning('Please enter both username and password');
        return;
      }
      
      if (username === 'hamza' && password === '1234') {
        message.success(`Welcome back, ${username}!`);
        setTimeout(() => {
          navigate('/profile'); // Now properly using the navigate function
        }, 1000);
      } else {
        message.error('Invalid credentials. Hint: try hamza/1234');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="watermark">VISION 360</div>
      <div className="corner-logo">Vision 360</div>

      <Card className="login-card">
        <Title level={4} className="logo-text">Vision 360</Title>
        <Title level={3} className="login-title">Login</Title>
        <Text type="secondary" className="login-subtitle">
          Veuillez entrer votre email et votre mot de passe pour continuer
        </Text>

        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="xxxx" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          
          <div className="form-options">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Password</Checkbox>
            </Form.Item>
            <a href="#" className="forgot-password">Forget Password?</a>
          </div>
            
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;