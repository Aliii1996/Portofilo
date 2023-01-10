import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        
        <article className='service'>
          
          <div className="service__head">
            <h3>React Website</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create React App is the CLI based tool </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JSX </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Claas component</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React Hooks </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Redux </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Binding React and routing </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom React.js Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interactive UI Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Application Development/ React.js Web App Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React.js Migration </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Enterprise Web Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Sites  </p>
            </li>
        
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services