import { Route, Routes } from 'react-router-dom'

import List from './List'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
     
      
    </Routes>
  )
}