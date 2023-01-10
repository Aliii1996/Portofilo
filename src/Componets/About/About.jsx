import React from 'react'
import './About.css'
import ME from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {SiVisualstudiocode} from 'react-icons/si'
import {IoIosCode} from 'react-icons/io'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const About = () => {
  return (

    <section className='about__section' id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
           <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Workin</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clints</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className='about__card'>
              <SiVisualstudiocode className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Project</small>
            </article>
            <article className='about__card'>
              <IoIosCode className='about__icon'/>
              <h5>Lines Code</h5>
              <small>500k+ Line Code</small>
            </article>
          </div>
          <p>Hello 
   My name is Ali Ashraf , 
   Iam 26 years 
   I live in Cairo at Maadi , 
   Iam graduated from computer Science Helwan university at 2020
   information technology and computer Science department ,
<br />
After completed my military i joined iti 3 months branch alex frond end and cross platform track ,
now i worked at jumia egypt ( Jumia Service ) branch as system admin and it help desk <br /> Finally iam looking for front end web job or any chance related this track</p>
              <a href="#contact" className='btn btn-primary let'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About