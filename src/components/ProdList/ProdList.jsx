import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProdContext } from '../../context/ProdProvider'

import './ProdList.css'

const ProdList = () => {
  
  const navigate = useNavigate()
  
  const { prodlist, setProdList, setProdDetails } = useContext(ProdContext)
  
  const clickItem = async (text) => {
    localStorage.setItem("anim-list", "true")
    document.querySelector('.ProdList').children[0].classList.remove('anim')
    const data = await fetch(`./DBLimonex/Productos/${text}.json`)
    const prodDet = await data.json()
    setProdDetails(prodDet)
    setTimeout(() => {
      navigate('/proddetails')
    }, 200);
  }

  const RemoveEnterAnim = () => {
    setTimeout(() => {
      const items = document.querySelectorAll(".enter-anim") 
      for(const item of items) 
        item.classList.remove('enter-anim')
    }, 1000)
  }

  const GetItemsFixed = async () => {
    const data = await fetch('./DBLimonex/Productos/productos.json')
    const prods = await data.json()
    setProdList(prods)
    RemoveEnterAnim()
  }
  
  useEffect(() => {
    GetItemsFixed()
  }, [])
  
  return (
    <div className="ProdList">
      {
        prodlist.map((item, key) =>
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

export default ProdList