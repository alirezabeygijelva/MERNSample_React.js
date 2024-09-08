import { createAction } from '@reduxjs/toolkit';
import request from '../../tools/request';

export const setVisits = createAction('Visits');
export const setTotalPages = createAction('TotalPages');  // Add this line

export const setCurrentPage = createAction('CurrentPage');


// Action creators for handling reservation creation states
export const createVisitRequest = createAction('CREATE_VISIT_REQUEST');
export const createVisitSuccess = createAction('CREATE_VISIT_SUCCESS');
export const createVisitFailure = createAction('CREATE_VISIT_FAILURE');

// Example of how to use it in your existing actions:
export const getVisits = (doctorId, patientName, page = 1, limit = 5) => {
  return (dispatch) => {
    request(`/visit?doctorId=${doctorId}&patientName=${patientName}&page=${page}&limit=${limit}`)
      .then(({ data }) => {
        if (data && data.Data && data.Data.visitdata) {
          dispatch(setVisits(data.Data.visitdata));  // Access nested reservations
          dispatch(setTotalPages(data.Data.totalPages));  // Access nested totalPages
          dispatch(setCurrentPage(data.Data.currentPage)); // Access nested currentPage
        } else {
          console.warn('No visitdata found or data format is incorrect:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching reserves:', error);
      });
  };
};
// Async action to add a new 
export const createVisit = (newVisitData) => async (dispatch) => {
  try {
    dispatch(createVisitRequest()); // Start the request

    const { data } = await request.post('/visit', newVisitData);

    if (data?.Data) {
      console.log('New visit added:', data.Data);
      dispatch(createVisitSuccess(data.Data)); // Successful reservation creation
    } else {
      console.warn('Failed to add visit or response format is incorrect:', data);
      dispatch(createVisitFailure('Failed to add Visit')); // Handle failure
    }
  } catch (error) {
    console.error('Error adding new Visit:', error);
    dispatch(createVisitFailure(error.message || 'Failed to add Visit')); // Handle error
  }
};
