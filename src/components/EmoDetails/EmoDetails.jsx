import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

import './EmoDetails.css'

const EmoDetails = ({setShowDetails, details}) => {
  //const navigate = useNavigate()
  
  const [emo, setEmo] = useState(details)
  
  const btnClose = () => {
    setShowDetails(false)
  }
  
  return (
    <div className="EmoDetails">
      <div className="cont">
        
        <h2 className={"name " + emo.theme}>{emo.name}</h2>
        
        <div className="content">
          <h2 className={emo.theme}>
            Contenido
          </h2>
          <div>
            {emo.content?.map((cont, key) =>
              <h3 key={key} className={emo.theme}>
                {cont}
              </h3>
            )}
          </div>
        </div>
        
        <div className="content">
          <h2 className={emo.theme}>
            Descripción
          </h2>
          <p className={emo.theme}>
            {emo.description}
          </p>
        </div>
        
        <div className="bottom">
          <h2 onClick={btnClose} className="close">
            cerrar
          </h2>
          <h2 className={"price " + emo.theme}>
            {emo.price}
          </h2>
        </div>
        
      </div>
    </div>
  )
}
export default EmoDetails