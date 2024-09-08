import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReserve } from '../../redux/actions/reserve';
import { fetchDocters } from '../../redux/actions/docter';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Form, Input, Button, Typography, Card, Select, DatePicker, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
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

const AddReserve = () => {
  const [doctor, setDoctor] = useState('');
  const [patientName, setPatientName] = useState('');
  const [hour, setHour] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [serviceType, setServiceType] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    dispatch(fetchDocters());
  }, [dispatch]);

  const doctors = useSelector((state) => state.docters);
  const reservationCreate = useSelector((state) => state.reservationCreate || {});
  const { loading, error, success } = reservationCreate;

  useEffect(() => {
    if (success) {
      // Reset the form fields after a successful reservation
      setDoctor('');
      setPatientName('');
      setHour('');
      setVisitDate('');
      setServiceType('');

      // Redirect to the reservation list after a short delay
      setTimeout(() => {
        navigate('/reserve/');
      }, 1000); // Adjust the delay as needed
    }
  }, [success, navigate]); // Include navigate in the dependency array


  const submitHandler = () => {
   
    const reservationData = {
      doctor,
      patientName,
      hour,
      visitDate,
      serviceType,
    };
    dispatch(createReserve(reservationData));
   
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <Title
        level={2}
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Comic Sans MS',
          marginBottom: '40px',
        }}
      >
        Book Your Appointment
      </Title>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {success && <div>Reservation Successful!</div>}

      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <BookingCard>
            <Form layout="vertical" onSubmit={submitHandler}>
              <Form.Item
                label="Doctor"
                name="doctor"
                rules={[{ required: true, message: 'Please select a doctor' }]}
              >
                <Select
                  id="doctor"
                  value={doctor}
                  onChange={(value) => setDoctor(value)}
                  required
                >
                  <Option value="">Select Doctor</Option>
                  {doctors.map((doc) => (
                    <Option key={doc._id} value={doc._id}>
                      {doc.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Patient Name"
                name="patientName"
                rules={[{ required: true, message: 'Please enter the patient name' }]}
              >
                <Input
                  type="text"
                  id="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                />
              </Form.Item>

              <Form.Item
                label="Hour"
                name="hour"
                rules={[{ required: true, message: 'Please enter the hour' }]}
              >
                <Input
                  type="text"
                  id="hour"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  required
                />
              </Form.Item>

              <Form.Item
                label="Visit Date"
                name="visitDate"
                rules={[{ required: true, message: 'Please select a visit date' }]}
              >
                <DatePicker
                  id="visitDate"
                  value={visitDate}
                  onChange={(date, dateString) => setVisitDate(dateString)}
                  required
                />
              </Form.Item>

              <Form.Item
                label="Service Type"
                name="serviceType"
                rules={[{ required: true, message: 'Please select a service type' }]}
              >
                <Select
                  id="serviceType"
                  value={serviceType}
                  onChange={(value) => setServiceType(value)}
                  required
                >
                  <Option value="">Select Service Type</Option>
                  <Option value="Consultation">Consultation</Option>
                  <Option value="Follow-up">Follow-up</Option>
                  <Option value="Surgery">Surgery</Option>
                  <Option value="Emergency">Emergency</Option>
                </Select>
              </Form.Item>

              <Row>
                <Col xs={12} sm={8} md={6}>
                <Button type="primary" htmlType="button" onClick={submitHandler}>
                    Reserve
                  </Button>
                </Col>
                <Col xs={12} sm={8} md={6}>
                  <Link to="/reserve/">
                    <Button type="primary">Back</Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </BookingCard>
        </Col>
      </Row>
    </div>
  );
};

export default AddReserve;
