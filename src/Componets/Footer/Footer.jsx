import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsArrowUpSquareFill} from 'react-icons/bs'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Need a Professional developer ? <br /> I'm ready to work with you <BsArrowUpSquareFill/></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram"><FiInstagram/></a>
        <a href="https://twitter"><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer