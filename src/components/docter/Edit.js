
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import  { Text, Submit } from '../utils/Form';
import { fetchDocter, UpdateDocter } from '../../redux/actions/docter'; // Import the fetch and update actions
import {  Form } from 'antd';

export default function EditDoctorForm() {
    const { id } = useParams(); // Get the doctor ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const docter = useSelector(state => state.docter); // Select the doctor from the Redux store
    const [disableButton, setDisableButton] = useState(false);
    const [form] = Form.useForm(); // Create a form instance

  useEffect(() => {
    dispatch(fetchDocter(id)); // Fetch the doctor's current data when the component mounts
    
  }, [dispatch, id]);
  
  useEffect(() => {
    if (docter && docter.name) {
      // Reset the form fields with the new doctor data when it changes
      form.setFieldsValue({
        name: docter.name,
        gender: docter.gender,
      });
    }
  }, [docter, form]);

  const handleSubmit = async (data) => { 
    setDisableButton(true);

    try {
      await dispatch(UpdateDocter(id, data)); // Dispatch the update action
      message.success('Doctor updated successfully!');
      navigate('/docter'); // Redirect to the doctors list page
    } catch (error) {
        console.log(error)
      message.error('Failed to update doctor. Please try again.');
    } finally {
      setDisableButton(false);
    }
  };
  return (
    <div>
    {docter && docter.name ? (
      <Form
        form={form}
        name='basic'
        initialValues={{ name: docter.name }}
        onFinish={handleSubmit}
      >
        <Text label='Name' name='name' required />
        
        <Submit disabled={disableButton} />
      </Form>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}