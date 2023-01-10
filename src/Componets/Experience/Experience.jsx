import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import{AiFillHtml5} from 'react-icons/ai'
import {DiJavascript1} from 'react-icons/di'
import {SiJquery} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend ">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experince_details'>
          <AiFillHtml5 className='experince__details__icon'/> 
          <div>
            <h4>HTML/HTML 5</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experince_details'>
          <DiCss3 className='experince__details__icon'/> 
          <div>
            <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experince_details'>
          <DiJavascript1 className='experince__details__icon'/> 
          <div>
            <h4>Java Script</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experince_details'>
          <FaBootstrap className='experince__details__icon'/>
          <div>
            <h4>BootStrap</h4>
          <small className='text-light'>Experienced</small>
          </div> 
          </article>
          <article className='experince_details'>
          <SiJquery className='experince__details__icon'/> 
          <div>
            <h4>JQuery</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experince_details'>
          <FaReact className='experince__details__icon'/> 
          <div>
            <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          </div>
        </div>
        {/* End of frontend  */}
        <div className="experince_backend ">
          <h3>Backend Development</h3>
          <div className='experience__content'>
          <article className='experince_details'>
          <BsPatchCheckFill className='experince__details__icon'/> 
          <div>
            <h4>JavaScript</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experince_details'>
          <BsPatchCheckFill className='experince__details__icon'/> 
          <div>
            <h4>PHP</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='experince_details'>
          <BsPatchCheckFill className='experince__details__icon'/> 
          <div>
            <h4>Python</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experince_details'>
          <BsPatchCheckFill className='experince__details__icon'/>
          <div>
            <h4>MySQL</h4>
          <small className='text-light'>Basic</small>
          </div> 
          </article>
          <article className='experince_details'>
          <BsPatchCheckFill className='experince__details__icon'/> 
          <div>
            <h4>C++</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          </div>
          
          

      </div>
      
      </div>
      
    </section>
  )
}

export default Experience