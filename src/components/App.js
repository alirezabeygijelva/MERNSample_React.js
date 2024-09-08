import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import HomePage from './general/Dashboard'
import Footer from './general/Footer'
import Header from './general/Header'
import Page404 from './general/Page404'
import Docter from './docter/Router'
import Person from './person/Router'
import Post from './post/Router'
import Reserve from './reserve/Route'
import Visit from './visit/Route'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, CssBaseline } from '@mui/material';

const { Content } = Layout

function App () {
  return ( 
    
    <Layout > 
     <CssBaseline />
      <Header />
     
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Routes>
          <Route path='/' element={<HomePage />} />
            <Route path='/person/*' element={<Person />} />
            <Route path='/post/*' element={<Post />} />
            <Route path='/reserve/*' element={<Reserve />} />
            <Route path='/docter/*' element={<Docter />} />
            <Route path='/visit/*' element={<Visit />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
          </Container>
      
      <Footer />
    </Layout>
  )
}

export default App
