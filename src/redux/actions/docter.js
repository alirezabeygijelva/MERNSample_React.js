import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'

export const setDocters = createAction('DOCTERS')
export const setDocter = createAction('DOCTER')
export const addDocter = createAction('ADD_DOCTER')
export const editDocter = createAction('EDIT_DOCTER')

export function fetchDocters () {
  return dispatch =>
    request('/doctores').then(({ data }) => dispatch(setDocters(data)))
}

export const fetchDocter  = id => dispatch => {
  dispatch(setDocter({}))
  request(`/doctores/${id}`).then(({ data }) => dispatch(setDocter(data)))
}

export const addNewDocter = docterData => dispatch => {
    console.log(docterData)
    request.post('/doctores', docterData)
      .then(({ data }) => dispatch(addDocter(data)))
  }

  
export const UpdateDocter = (id,docterData) => dispatch => {
    console.log(id)
    request.put(`/doctores/${id}`, docterData)
      .then(({ data }) => dispatch(editDocter(data)))
  }