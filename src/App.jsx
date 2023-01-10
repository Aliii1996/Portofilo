import React from 'react'
import Contacts from './Componets/Contacts/Contacts'
import Experience from './Componets/Experience/Experience'
import Header from './Componets/Header/Header'
import Nav from './Componets/Nav/Nav'
import Portfolio from './Componets/Portofolio/Portfolio'
import Services from './Componets/Services/Services'
import Testimonials from './Componets/Testimonials/Testimonials'
import Footer from './Componets/Footer/Footer'
import About from './Componets/About/About'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const App = () => {
  return (
    <>
          
        <Header/>
        <Nav />
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
    
    </>
    
  )
  
}

export default App