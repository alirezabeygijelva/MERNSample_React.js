import { Routes, Route } from 'react-router-dom'
// import Full from './Full'
import List from './List'
 import New from './New'
import EditDoctorForm from './Edit'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      {/* <Route path='/:id' element={<Full />} />*/}
      <Route path='/new' element={<New />} /> 
      <Route path='/Edit/:id' element={<EditDoctorForm />} /> 
    </Routes>
  )
}