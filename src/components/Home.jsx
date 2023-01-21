import { useState } from 'react'

import Head from './Head/Head'
import BodyList from './BodyList/BodyList'
import Footer from './Footer/Footer'
import EmoDetails from './EmoDetails/EmoDetails'

import './Home.css'

const Home = () => {
  const [showdetails, setShowDetails] = useState(false)
  const [details, setDetails] = useState({})
  
  return (
    <div className="Home">
      <Head />
      <BodyList 
        setShowDetails={setShowDetails} 
        setDetails={setDetails}/>
      <Footer />
      {
        showdetails && <div className="shadow"></div>
      }
      {
        showdetails && <EmoDetails setShowDetails={setShowDetails} details={details}/>
      }
    </div>
  )
}
export default Home