import React from 'react'
import './Nav.css'
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a  onClick={()=> setactiveNav('#')} className={activeNav==='#' ? 'active' : ''} href="#"><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setactiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setactiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setactiveNav('#services')} className={activeNav==='#services' ? 'active' : ''} ><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setactiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav