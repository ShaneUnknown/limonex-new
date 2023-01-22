import { createContext, useState } from "react"

export const DetailsContext = createContext()

const DetailsProvider = (props) => {
  const [details, setDetails] = useState({})

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {props.children}
    </DetailsContext.Provider>
  )
}

export default DetailsProvider