import { createReducer } from '@reduxjs/toolkit';

import { 
    setVisits, 
    setTotalPages,  // Update the import
    setCurrentPage, 
    createVisitRequest, 
    createVisitSuccess, 
    createVisitFailure 
} from '../actions/visit';

const initialState = {
    visits: [],
    totalPages: 0,
    currentPage: 1,
    loading: false,
    success: false,
    error: null,
};

export const visitReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setVisits, (state, action) => {
           
            state.visits = action.payload;
        })
        .addCase(setTotalPages, (state, action) => {  // Update the case
            
            state.totalPages = action.payload;  // Assuming 'totalPages' corresponds to total items count
        })
        .addCase(setCurrentPage, (state, action) => {
            state.currentPage = action.payload;
        })
        .addCase(createVisitRequest, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(createVisitSuccess, (state, action) => {
            state.loading = false;
            state.success = true;
            state.visits.push(action.payload);
        })
        .addCase(createVisitFailure, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });
});