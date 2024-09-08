import { Route, Routes } from 'react-router-dom'

import List from './List'
import New from './New'
import BookingForm from './BookingForm'
export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/book' element={<BookingForm />} />
      <Route path='/new' element={<New />} />
      
    </Routes>
  )
}