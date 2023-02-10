import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProdContext } from '../../context/ProdProvider'

import productos from '../../db/Productos/productos'

import './ProdList.css'

const ProdList = () => {
  
  const navigate = useNavigate()
  
  const { prodlist, setProdList, setProdDetails } = useContext(ProdContext)
  
  const clickItem = (i) => {
    localStorage.setItem("anim-list", "true")
    document.querySelector('.ProdList').children[0].classList.remove('anim')/*
    const data = await fetch(`./DBLimonex/Productos/${text}.json`)
    const prodDet = await data.json()
    */
    setProdDetails(productos[i])
    setTimeout(() => {
      navigate('/proddetails')
    }, 200);
  }

  const RemoveEnterAnim = () => {
    setTimeout(() => {
      const items = document.querySelectorAll(".enter-anim") 
      for(const item of items) 
        item.classList.remove('enter-anim')
    }, 600)
  }

  const GetItemsFixed = () => {
    /*
    const data = await fetch('./DBLimonex/Productos/productos.json')
    const prods = await data.json()
    */
    setProdList(productos)
    RemoveEnterAnim()
  }
  
  useEffect(() => {
    GetItemsFixed()
  }, [])
  
  return (
    <div className="ProdList">
      {
        prodlist.map((item, i) =>
          <div key={i} className={"item enter-anim " + item.theme} onClick={() => clickItem(i)}
          >
            <h3 className="name">
              { item.name }
            </h3>
            <h3 className={"price " + item.theme}>
              { item.price }
            </h3>
          </div>
        )
      }
    </div>
  )
}

export default ProdList