import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { EmoContext } from '../../context/EmoProvider'

import './EmoList.css'

const EmoList = () => {
  
  const navigate = useNavigate()
  
  const { emolist, setEmoList, setEmoDetails } = useContext(EmoContext)
  
  const clickItem = async (text) => {
    localStorage.setItem("anim-list", "true")
    document.querySelector('.EmoList').children[0].classList.remove('anim')
    const data = await fetch(`./DBLimonex/Emolientes/${text}.json`)
    const emoDet = await data.json()
    setEmoDetails(emoDet)
    setTimeout(() => {
      navigate('/emodetails')
    }, 200);
  }
  
  const CheckAnimHelp = () => {
    const animItem = localStorage.getItem("anim-list")
    if (animItem !== "true") 
      setTimeout(() => {
        document.querySelector('.EmoList').children[0].classList.add('anim')
      }, 2000)
  }

  const RemoveEnterAnim = () => {
    setTimeout(() => {
      const items = document.querySelectorAll(".enter-anim") 
      for(const item of items) 
        item.classList.remove('enter-anim')
    }, 1000)
  }

  const GetItemsFixed = async () => {
    const data = await fetch('./DBLimonex/Emolientes/emolientes.json')
    const dataEmos = await data.json()
    setEmoList(dataEmos)
    CheckAnimHelp()
    RemoveEnterAnim()
  }
  
  useEffect(() => {
    GetItemsFixed()
    //console.log('executed emo list')
  }, [])
  
  return (
    <div className="EmoList">
      {
        emolist.map((item, key) =>
          <div key={key} className="item enter-anim" onClick={() => clickItem(item.get)}
            style={{"--i": key}}
          >
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

export default EmoList