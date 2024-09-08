import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import App from './components/App'
import store from './redux/store'
import 'antd/dist/antd.css'
import './assets/css/general.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <ReduxProvider store={store}>
     
    <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
      
    </ReduxProvider>
  </Router>
  // </React.StrictMode>
)
