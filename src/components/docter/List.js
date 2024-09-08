import { EyeOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchDocters } from '../../redux/actions/docter'
import Table from '../utils/Table'
import  { Submit } from '../utils/Form'
import { Col, Row } from 'antd';
const columns = [
  { title: 'Id', key: '_id',dataIndex: '_id' },
  {
    title: 'Name',
    key: 'name',
    render: (field, record) => <Link to={`/docter/Edit/${record._id}`}>{field}</Link>
  },
 
  {
    title: 'Action',
    key: 'actions',
    render: (f, record) => (
      <Link to={`/docter/${record._id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

const List = () => {
    const dispatch = useDispatch();
  const data = useSelector(state => state.docters);

  useEffect(() => {
    dispatch(fetchDocters());
  }, [dispatch]);

  return (
    <div>
 <Row>
      <Col span={24}>
        <Link to="/docter/new">
        <Submit label='addDocter' />
        </Link>
      </Col>
    </Row>
    <Row>
    <Col span={24}>
    
     <Table data={data} columns={columns} />

    </Col>
     
      </Row>
    </div>
  );
};

export default List;
