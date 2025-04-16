import React from "react";
import { Card, Button, Avatar, Row, Col } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const data = [
  {
    name: "Jason Price",
    email: "kuhlman.jeremy@yahoo.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: null,
  },
  {
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image: null,
  },
  {
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
];

const LesEnqueteurs = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
        <span style={{ borderBottom: "3px solid #1890ff" }}>les enquêteurs</span>
      </h2>
      <Row gutter={[16, 16]}>
        {data.map((enq, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              style={{ textAlign: "center", borderRadius: "12px" }}
              bodyStyle={{ paddingBottom: "16px" }}
            >
              <Avatar
                size={96}
                src={enq.image}
                icon={!enq.image && <UserOutlined />}
                style={{ marginBottom: "16px" }}
              />
              <h3 style={{ marginBottom: "4px" }}>{enq.name}</h3>
              <p style={{ color: "#888", marginBottom: "12px" }}>{enq.email}</p>
              <Button icon={<MailOutlined />}>Message</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LesEnqueteurs;
