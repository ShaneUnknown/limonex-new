import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProdContext } from '../../context/ProdProvider'
import './ProdDetails.css'

const ProdDetails = () => {
  const navigate = useNavigate()
  
  const { proddetails } = useContext(ProdContext)
  
  const [prod, setProd] = useState(proddetails)
  
  const btnClose = () => {
    navigate('/')
  }
  
  return (
    <div className="ProdDetails">
      <div className="cont">
        
        <h2 className={"name " + prod.theme}>{prod.name}</h2>
        
        <div className="content">
          <h2 className={prod.theme}>
            Contenido
          </h2>
          <div>
            <h3 className={prod.theme}>
              {prod.content}
            </h3>
          </div>
        </div>
        
        <div className="content">
          <h2 className={prod.theme}>
            Propiedades
          </h2>
          <div className={prod.theme}>
            { prod.properties?.map((prop, index) =>
                <p key={index}>
                  { prop }
                </p>
              )
            }
          </div>
        </div>
        
        <div className="bottom">
          <h2 className={"price " + prod.theme}>
            {prod.price}
          </h2>
          <h2 onClick={btnClose} className="close">
            cerrar
          </h2>
        </div>
        
      </div>
    </div>
  )
}
export default ProdDetails