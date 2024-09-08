import { createAction } from '@reduxjs/toolkit';
import request from '../../tools/request';

export const setReserves = createAction('Reserves');
export const setTotalPages = createAction('TotalPages');  // Add this line

export const setCurrentPage = createAction('CurrentPage');


// Action creators for handling reservation creation states
export const createReserveRequest = createAction('CREATE_RESERVE_REQUEST');
export const createReserveSuccess = createAction('CREATE_RESERVE_SUCCESS');
export const createReserveFailure = createAction('CREATE_RESERVE_FAILURE');

// Example of how to use it in your existing actions:
export const getReserves = (doctorId, visitDate, page = 1, limit = 5) => {
  return (dispatch) => {
    request(`/reserves?doctorId=${doctorId}&visitDate=${visitDate}&page=${page}&limit=${limit}`)
      .then(({ data }) => {
        if (data && data.Data && data.Data.reservations) {
          dispatch(setReserves(data.Data.reservations));  // Access nested reservations
          dispatch(setTotalPages(data.Data.totalPages));  // Access nested totalPages
          dispatch(setCurrentPage(data.Data.currentPage)); // Access nested currentPage
        } else {
          console.warn('No reservations found or data format is incorrect:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching reserves:', error);
      });
  };
};
// Async action to add a new reserve
export const createReserve = (newReserveData) => async (dispatch) => {
  try {
    dispatch(createReserveRequest()); // Start the request

    const { data } = await request.post('/reserves', newReserveData);

    if (data?.Data) {
      console.log('New reservation added:', data.Data);
      dispatch(createReserveSuccess(data.Data)); // Successful reservation creation
    } else {
      console.warn('Failed to add reservation or response format is incorrect:', data);
      dispatch(createReserveFailure('Failed to add reservation')); // Handle failure
    }
  } catch (error) {
    console.error('Error adding new reserve:', error);
    dispatch(createReserveFailure(error.message || 'Failed to add reservation')); // Handle error
  }
};
