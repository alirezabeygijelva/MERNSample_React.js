import { createReducer } from '@reduxjs/toolkit';

import { 
    setReserves, 
    setTotalPages,  // Update the import
    setCurrentPage, 
    createReserveRequest, 
    createReserveSuccess, 
    createReserveFailure 
} from '../actions/reserve';

const initialState = {
    reserves: [],
    totalPages: 0,
    currentPage: 1,
    loading: false,
    success: false,
    error: null,
};

export const reserveReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setReserves, (state, action) => {
           
            state.reserves = action.payload;
        })
        .addCase(setTotalPages, (state, action) => {  // Update the case
            
            state.totalPages = action.payload;  // Assuming 'totalPages' corresponds to total items count
        })
        .addCase(setCurrentPage, (state, action) => {
            state.currentPage = action.payload;
        })
        .addCase(createReserveRequest, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(createReserveSuccess, (state, action) => {
            state.loading = false;
            state.success = true;
            state.reserves.push(action.payload);
        })
        .addCase(createReserveFailure, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });
});