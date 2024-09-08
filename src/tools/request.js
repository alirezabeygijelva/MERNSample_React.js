import axios from 'axios'
import { BackEnd_URL } from './constants'

const request = axios.create({
  baseURL: BackEnd_URL,
  headers: { 'Content-Type': 'application/json' }
})

export default request
