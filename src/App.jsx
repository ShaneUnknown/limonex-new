import { useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import EmptyRoute from './EmptyRoute'
import Head from './components/Head/Head'
import Footer from './components/Footer/Footer'
import EmoList from './components/EmoList/EmoList'
import EmoDetails from './components/EmoDetails/EmoDetails'
import ProdList from './components/ProdList/ProdList'
import ProdDetails from './components/ProdDetails/ProdDetails'

import { ListContext } from './context/ListProvider'

import './App.css'

const App = () => {
  
  const { currentlist } = useContext(ListContext)
  
  return (
    <div className="App">
    
      <Head />
      
      {
        currentlist ? <EmoList /> : <ProdList />
      }
      
      <Routes>
        <Route path="/" element={<EmptyRoute />}/>
        <Route path="/emodetails" element={<EmoDetails />}/>
        <Route path="/proddetails" element={<ProdDetails />}/>
      </Routes>
      
      <Footer />
      
    </div>
  )
}

export default App