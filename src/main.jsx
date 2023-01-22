import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import DetailsProvider from './context/DetailsProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <DetailsProvider>
        <App />
      </DetailsProvider>
    </HashRouter>
  </React.StrictMode>
)