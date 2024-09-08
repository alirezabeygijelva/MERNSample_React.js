import { combineReducers } from '@reduxjs/toolkit'
import { persons, person } from './person'
import { post, posts } from './post'
import {reserveReducer}  from './reserve'
import { docter, docters } from './docter'
import {visitReducer}  from './visit'

const reducer = combineReducers({
  persons,
  person,
  posts,
  post,
  reserveReducer,
  docter,
  docters,
  visitReducer
})

export default reducer

