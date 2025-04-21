import React from 'react';
import { Input, Button, Card, Row, Col } from 'antd';
import {
  SearchOutlined,
  ProfileOutlined,
  TeamOutlined,
  DatabaseOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Search } = Input;

const cardStyle = {
  width: 200,
  height: 200,
  borderRadius: '15px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '70px',
  height: '70px',
  objectFit: 'contain',
  marginBottom: 10,
};

const iconStyle = {
  fontSize: '48px',
  marginBottom: 10,
};

const Materials = () => {
  return (
    <div style={{ padding: '30px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Search bar and button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
        <Search
          placeholder="Search..."
          enterButton
          size="large"
          style={{ maxWidth: 400 }}
        />
        <Button type="primary" icon={<ProfileOutlined />} size="large">
          Lister tous les matériels
        </Button>
      </div>

      {/* Cards layout */}
      <Row gutter={[24, 24]}>
        <Col>
          <Card hoverable style={{ ...cardStyle }}>
            <img src="https://cdn-icons-png.flaticon.com/512/6086/6086750.png" alt="desk1" style={imageStyle} />
            <h3>Bureau 1</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle }}>
            <img src="https://cdn-icons-png.flaticon.com/512/6086/6086750.png" alt="desk2" style={imageStyle} />
            <h3>Bureau 2</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle, background: 'linear-gradient(to right, #fcb045, #fd1d1d)', color: 'white' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/2641/2641405.png" alt="Direction" style={imageStyle} />
            <h3>Direction</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle, background: 'linear-gradient(to right, #f7971e, #ffd200)' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3004/3004780.png" alt="Salle de réunion" style={imageStyle} />
            <h3>Salle de réunion</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle, background: 'linear-gradient(to right, #ffe29f, #ffaec9)' }}>
            <TeamOutlined style={iconStyle} />
            <h3>Terrain 1</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle, background: 'linear-gradient(to right, #ffaec9, #ffe29f)' }}>
            <TeamOutlined style={iconStyle} />
            <h3>Terrain 2</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle, background: 'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)', color: 'white' }}>
            <DatabaseOutlined style={iconStyle} />
            <h3>IT</h3>
          </Card>
        </Col>
        <Col>
          <Card hoverable style={{ ...cardStyle, background: 'linear-gradient(to right, #8e2de2, #4a00e0)', color: 'white' }}>
            <CheckCircleOutlined style={iconStyle} />
            <h3>Assurance qualité</h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Materials;
