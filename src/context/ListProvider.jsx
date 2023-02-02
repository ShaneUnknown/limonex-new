import { createContext, useState, useEffect } from "react"

export const ListContext = createContext()

const ListProvider = (props) => {
  
  const [currentlist, setCurrentList] = useState(true)
  
  return (
    <ListContext.Provider value={{ currentlist, setCurrentList }}>
      {props.children}
    </ListContext.Provider>
  )
}

export default ListProvider