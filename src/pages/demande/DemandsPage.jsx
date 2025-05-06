import React, { useState } from 'react';
import {
  Layout, Table, Button, Modal, Form, Input, Select, DatePicker, Card, Row,Col
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import './DemandsPage.css'

const { Content } = Layout;
const { Option } = Select;

const DemandsPage = () => {
  const { isLightMode } = useTheme();
  const [demands, setDemands] = useState([
    { id: '00001', name: 'Demande A', type: 'Type 1', status: 'Completed' },
    { id: '00002', name: 'Demande B', type: 'Type 2', status: 'Processing' },
    { id: '00003', name: 'Demande C', type: 'Type 1', status: 'Rejected' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddDemand = () => {
    form.validateFields().then(values => {
      const newDemand = {
        id: String(demands.length + 1).padStart(5, '0'),
        name: values.title,
        type: values.type,
        status: 'Processing',
        date: values.date.format('YYYY-MM-DD')
      };
      setDemands([...demands, newDemand]);
      setModalVisible(false);
      form.resetFields();
    });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nom', dataIndex: 'name', key: 'name' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    {
      title: 'Statut',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color = 'default';
        if (status === 'Completed') color = 'green';
        else if (status === 'Processing') color = 'blue';
        else if (status === 'Rejected') color = 'red';
        return <span style={{ color }}>{status}</span>;
      }
    }
  ];

  return (
    <Layout className={isLightMode? 'layout-light':'layout-dark'}>
      <Content className={isLightMode ? 'content-light' : 'content-dark'}>
        <Card
          title={<span className={isLightMode ? 'card-title-light' : 'card-title-dark'}>Liste des demandes</span>}
          bordered={false} className={isLightMode ? "card-light" : "card-dark"}
          extra={
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setModalVisible(true)}>
              Nouvelle demande
            </Button>
          }
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24}>
              <Table
                className={isLightMode ? 'table-light' : 'table-dark'}
                columns={columns}
                dataSource={demands}
                rowKey="id"
                scroll={{ x: 600 }} // Ajout d'un scroll horizontal pour les petits écrans
              />
            </Col>
          </Row>
        </Card>

        <Modal
          title="Ajouter une nouvelle demande"
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          onOk={handleAddDemand}
          okText="Ajouter"
          cancelText="Annuler"
          style={{ top: 0 }}
          className={isLightMode ? 'modal-light' : 'modal-dark'}
        >
          <Form form={form} layout="vertical">
            <Form.Item label="Titre" name="title" rules={[{ required: true, message: 'Champ requis' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Champ requis' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Champ requis' }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Champ requis' }]}>
              <Select 
                  className={isLightMode ? "select-light" : "select-dark"}
                  dropdownClassName={isLightMode ? "" : "select-dropdown-dark"}>
                <Option value="Type 1">Type 1</Option>
                <Option value="Type 2">Type 2</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default DemandsPage;
