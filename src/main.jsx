import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import EmoProvider from './context/EmoProvider'
import ProdProvider from './context/ProdProvider'
import ListProvider from './context/ListProvider'

import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <EmoProvider>
      <ProdProvider>
        <ListProvider>
          <App />
        </ListProvider>
      </ProdProvider>
    </EmoProvider>
  </HashRouter>
)
