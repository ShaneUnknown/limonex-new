import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import EmoDetails from './components/EmoDetails/EmoDetails'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/details" element={<EmoDetails />}/>
      </Routes>
      
    </div>
  )
}

export default App