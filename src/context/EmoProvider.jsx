import { createContext, useState, useEffect } from "react"

export const EmoContext = createContext()

const EmoProvider = (props) => {
  
  const [emolist, setEmoList] = useState([])
  
  const [emodetails, setEmoDetails] = useState({})
  
  return (
    <EmoContext.Provider value={{ emolist, emodetails, setEmoList, setEmoDetails}}>
      {props.children}
    </EmoContext.Provider>
  )
}

export default EmoProvider