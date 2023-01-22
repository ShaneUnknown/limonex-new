import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DetailsContext } from '../../context/DetailsProvider'
import './BodyList.css'

const BodyList = () => {
  
  const navigate = useNavigate()
  
  const { setDetails } = useContext(DetailsContext)
  
  const [list, setList] = useState([])
  
  const clickItem = async (text) => {
    const data = await fetch(`./DBLimonex/${text}.json`)
    const emoDet = await data.json()
    setDetails(emoDet)
    setTimeout(() => {
      navigate('/details')
    }, 150);
  }
  
  useEffect(() => {
    const GetItems = async () => {
      const data = await fetch('./DBLimonex/emolientes.json')
      const emos = await data.json()
      setList(emos)
    }
    GetItems()
  }, [])
  
  return (
    <div className="BodyList">
      {
        list.map((item, key) =>
          <div key={key} className="item" onClick={() => clickItem(item.get)}>
            
            <h3 className="name">
              { item.name }
            </h3>
            <h3 className="price">
              { item.price }
            </h3>
          </div>
        )
      }
    </div>
  )
}

export default BodyList