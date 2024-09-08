import { message } from 'antd'
import { useDispatch } from 'react-redux';
import Form, { Text,Submit } from '../utils/Form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addNewDocter } from '../../redux/actions/docter';
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd';
export default function New () {
  const [disableButton, setDisableButton] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  async function handleSubmit (data) {
    setDisableButton(true)
  
    try {
        // Dispatch the action to add a new doctor
        await dispatch(addNewDocter(data));
        message.success('Doctor added successfully!');
        navigate('/docter'); // Redirect to the doctors list page
      } catch (error) {
        message.error('Failed to add doctor. Please try again.');
      } finally {
        setDisableButton(false); // Re-enable the button after request
      }
  }

  return (
    <div>
      <Form name='basic' onFinish={handleSubmit}>
        <Text label='Name' name='name' required />
      <Row>
      <Col span={12}>
        <Submit disabled={disableButton} />
      </Col>

      <Col span={12} style={{float:'left'}}> 
      <Link to="/docter">
        <Submit label='Back' />
        </Link></Col>
      </Row>
       
       
      </Form>
    </div>
  )
}
