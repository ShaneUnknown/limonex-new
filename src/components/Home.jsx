import { useState } from 'react'

import Head from './Head/Head'
import BodyList from './BodyList/BodyList'
import Footer from './Footer/Footer'
import EmoDetails from './EmoDetails/EmoDetails'

import './Home.css'

const Home = () => {
  
  return (
    <div className="Home">
      <Head />
      <BodyList />
      <Footer />
    </div>
  )
}
export default Home