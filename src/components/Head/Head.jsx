import { useState, useEffect, useContext } from 'react'

import { EmoContext } from '../../context/EmoProvider'
import { ListContext } from '../../context/ListProvider'

import { useNavigate } from 'react-router-dom'

import './Head.css'

const Head = () => {
  
  const { setEmoList } = useContext(EmoContext)
  const { setCurrentList } = useContext(ListContext)
  
  const navigate = useNavigate()
  
  const tabItems = ["Emolientes", "Productos"]
  
  const [current, setCurrent] = useState("Emolientes")
  
  const clearLocalStorage = () => {
    localStorage.clear()
  }
  
  const handleList = (text) => {
    setCurrent(text)
    localStorage.setItem("anim-head", "true")
    document.querySelector('.Head .tab').children[1].classList.remove('anim')
    switch (text) {
      case 'Emolientes':
        setCurrentList(true)
        break
      case 'Productos':
        setCurrentList(false)
        break
      default:
        console.log('nothing to show')
    }
  }
  
  const CheckAnimHelp = () => {
    const animItem = localStorage.getItem("anim-head")
    if (animItem !== "true") 
       document.querySelector('.Head .tab').children[1].classList.add('anim')
  }
  
  const AddAnim = () => {
    const items = document.querySelectorAll(".EmoList .item") 
    for(const item of items) 
      item.classList.add('enter-anim')
  }
  
  useEffect(() => {
    setTimeout(() => {
      CheckAnimHelp()
    }, 100);
  }, [])
  
  return (
    <div className="Head">
      <img onClick={clearLocalStorage} className="logo" src="limonex_logo_web.svg" />
      <div>
        <h2>
          Emoliente Medicinal
        </h2>
        
        <div className="tab">
          {
            tabItems.map((item, key) =>
              <h1 key={key} onClick={ () => handleList(item) }
                className={current === item ? 'active' : ''}>
                { item }
              </h1>
            )
          }
        </div>
        
      </div>
    </div>
  )
}

export default Head