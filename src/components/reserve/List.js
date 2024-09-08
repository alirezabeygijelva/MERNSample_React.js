import React, { useEffect, useState } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReserves } from '../../redux/actions/reserve';
import { fetchDocters } from '../../redux/actions/docter';
import Table from '../utils/Table';
import { Pagination, Select, Button, DatePicker, Form, Col, Row } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

const columns = [
  { title: 'Id', key: '_id' },
  {
    title: 'patinetName',
    key: 'patinetName',
  },
  {
    title: 'VisidDate',
    key: 'visitDate',
  },
  {
    title: 'Doctor Name',
    key: 'doctorName',
    render: (text, record) => (record.doctor ? record.doctor.name : 'No Doctor'),
  },
  {
    title: 'actions',
    key: 'actions',
    render: (f, record) => (
      <Link to={`/post/${record._id}`}>
        <EyeOutlined />
      </Link>
    ),
  },
];

const List = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserveReducer.reserves);
  const totalPages = useSelector((state) => state.reserveReducer.totalPages);
  const currentPage = useSelector((state) => state.reserveReducer.currentPage);
  const doctors = useSelector((state) => state.docters);

  const [doctorId, setDoctorId] = useState('');
  const [visitDate, setVisitDate] = useState('');

  useEffect(() => {
    dispatch(getReserves('', '', currentPage, 5));
    dispatch(fetchDocters());
  }, [dispatch, currentPage]);

  // console.log(totalPages)
  // console.log(reserves)
  const handlePageChange = (page) => {
    dispatch(getReserves(doctorId, visitDate, page, 5));
  };

  const handleFormChange = (changedValues, allValues) => {
    setDoctorId(allValues.doctorId || '');
    setVisitDate(allValues.visitDate || '');
  };

  const handleFormSubmit = () => {
    const formattedDate = visitDate ? visitDate.format('YYYY-MM-DD') : '';
    dispatch(getReserves(doctorId, visitDate, 1, 5));
  };

  return (
    <div>
      <Row style={{ marginBottom: '40px' }}>
        <Col xs={22}>
          <Form layout="inline" onValuesChange={handleFormChange} onFinish={handleFormSubmit}>
            <Form.Item label="Doctor" name="doctorId">
              <Select
                placeholder="Select Doctor"
                style={{ width: 200 }}
                value={doctorId}
                onChange={(value) => setDoctorId(value)}
              >
                {doctors.map((doctor) => (
                  <Option key={doctor._id} value={doctor._id}>
                    {doctor.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Visit Date" name="visitDate">
              <DatePicker
                placeholder="Select Date"
                value={visitDate}
                onChange={(date) => setVisitDate(date)}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={2}>
          <Link to="/reserve/new">
            <Button type="primary" htmlType="submit">
              New
            </Button>
          </Link>
        </Col>
      </Row>

      <Table data={reserves} columns={columns} rowKey={(record) => record._id}  pagination={false}  />

      <Pagination
        current={currentPage}
        pageSize={5}
        total={totalPages * 5} // Adjust total based on pages * page size
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;
