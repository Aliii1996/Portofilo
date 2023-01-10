import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/WhatsApp_Image_2022-06-05_at_10.25.35_AM-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section className='container header__container'>
        <h5 className='hello-word'>Hello i'm </h5>
        <h1>Ali Asharf</h1>
        <h5  className='text-light job-title'> Developer</h5>
        <h3></h3>
        <CTA/>
        <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header