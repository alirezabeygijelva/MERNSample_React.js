import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, Select, DatePicker, Row, Col } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { Title } = Typography;

const BookingCard = styled(Card)`
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const BookingForm = () => {
  const [name, setName] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState(null);

  const handleSubmit = () => {
    alert(`Booking Confirmed:
      Name: ${name}
      Doctor ID: ${doctorId}
      Date: ${date ? date.format('YYYY-MM-DD') : ''}`);
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <Title level={2} style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Comic Sans MS', marginBottom: '40px' }}>
        Book Your Appointment
      </Title>
      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <BookingCard>
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Doctor"
                name="doctorId"
                rules={[{ required: true, message: 'Please select a doctor' }]}
              >
                <Select
                  value={doctorId}
                  onChange={(value) => setDoctorId(value)}
                  placeholder="Select a doctor"
                >
                  <Option value={1}>Dr. Mohammad - General Physician</Option>
                  <Option value={2}>Dr. Ahmadi - Dentist</Option>
                  <Option value={3}>Dr. Soleimani - Specialist</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Please select a date' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  value={date}
                  onChange={(date) => setDate(date)}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Book Appointment
                </Button>
              </Form.Item>
            </Form>
          </BookingCard>
        </Col>
      </Row>
    </div>
  );
};

export default BookingForm;
