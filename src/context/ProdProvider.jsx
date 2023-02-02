import { createContext, useState, useEffect } from "react"

export const ProdContext = createContext()

const ProdProvider = (props) => {
  
  const [prodlist, setProdList] = useState([])
  
  const [proddetails, setProdDetails] = useState({})
  
  return (
    <ProdContext.Provider value={{ prodlist, proddetails, setProdList, setProdDetails}}>
      {props.children}
    </ProdContext.Provider>
  )
}

export default ProdProvider