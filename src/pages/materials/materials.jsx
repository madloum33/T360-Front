import React, { useState } from 'react';
import { Input, Button, Card, Row, Col, Modal, Form, InputNumber, List, Progress } from 'antd';
import {
  SearchOutlined,
  ProfileOutlined,
  TeamOutlined,
  DatabaseOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Search } = Input;

const Materials = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [form] = Form.useForm();

  const squareCardStyle = {
    width: 200,
    height: 200,
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer'
  };

  const showModal = (cardName) => {
    setSelectedCard(cardName);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
    form.resetFields();
  };

  const onFinish = (values) => {
    const newMaterial = {
      id: Math.random().toString(36).substring(2, 9),
      name: values.name,
      durability: values.durability
    };
    setMaterials([...materials, newMaterial]);
    form.resetFields();
  };

  const removeMaterial = (id) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const cards = [
    {
      title: 'Bureau 1',
      icon: 'https://cdn-icons-png.flaticon.com/512/6086/6086750.png',
      bg: '#fff',
    },
    {
      title: 'Bureau 2',
      icon: 'https://cdn-icons-png.flaticon.com/512/6086/6086750.png',
      bg: '#fff',
    },
    {
      title: 'Direction',
      icon: 'https://cdn-icons-png.flaticon.com/512/2641/2641405.png',
      bg: 'linear-gradient(to right, #fcb045, #fd1d1d)',
      white: true
    },
    {
      title: 'Salle de réunion',
      icon: 'https://cdn-icons-png.flaticon.com/512/3004/3004780.png',
      bg: 'linear-gradient(to right, #f7971e, #ffd200)'
    },
    {
      title: 'Terrain 1',
      icon: <TeamOutlined style={{ fontSize: '48px' }} />,
      bg: 'linear-gradient(to right, #ffe29f, #ffaec9)'
    },
    {
      title: 'Terrain 2',
      icon: <TeamOutlined style={{ fontSize: '48px' }} />,
      bg: 'linear-gradient(to right, #ffaec9, #ffe29f)'
    },
    {
      title: 'IT',
      icon: <DatabaseOutlined style={{ fontSize: '48px' }} />,
      bg: 'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)',
      white: true
    },
    {
      title: 'Assurance de qualité',
      icon: <CheckCircleOutlined style={{ fontSize: '48px' }} />,
      bg: 'linear-gradient(to right, #8e2de2, #4a00e0)',
      white: true
    }
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Search bar and button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
        <Search placeholder="Search..." enterButton size="large" style={{ maxWidth: 400 }} />
        <Button type="primary" icon={<ProfileOutlined />} size="large">
          Lister tous les matériels
        </Button>
      </div>

      {/* Card Grid */}
      <Row gutter={[24, 24]} justify="start">
        {cards.map((card, index) => (
          <Col key={index}>
            <Card
              hoverable
              onClick={() => showModal(card.title)}
              style={{
                ...squareCardStyle,
                background: card.bg,
                color: card.white ? 'white' : 'black'
              }}
              cover={
                typeof card.icon === 'string' ? (
                  <img src={card.icon} alt={card.title} style={{ width: 60, marginTop: 20 }} />
                ) : null
              }
            >
              {typeof card.icon !== 'string' && card.icon}
              <h3 style={{ marginTop: 10 }}>{card.title}</h3>
              
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Materials */}
      <Modal
        title={`Matériels - ${selectedCard}`}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="inline" onFinish={onFinish} style={{ marginBottom: 20 }}>
          <Form.Item name="name" rules={[{ required: true, message: 'Nom requis' }]}>
            <Input placeholder="Nom du matériel" />
          </Form.Item>
          <Form.Item name="durability" rules={[{ required: true, message: 'Durabilité requise' }]}>
            <InputNumber placeholder="Durabilité (%)" min={0} max={100} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Ajouter</Button>
          </Form.Item>
        </Form>

        <List
          dataSource={materials}
          renderItem={(item) => (
            <List.Item
              actions={[<a key="remove" onClick={() => removeMaterial(item.id)}>Supprimer</a>]}
            >
              <strong>{item.name}</strong> – {item.durability}%
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default Materials;
