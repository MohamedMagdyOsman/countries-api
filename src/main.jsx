// react
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// component
import App from './App.jsx'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// style
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/countries-api/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
