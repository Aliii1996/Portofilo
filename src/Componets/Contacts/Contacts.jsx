import React from 'react'
import './Contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'




const donemessage = () => {
  alert ('Thank You ! Your message has been sent')
}

const Contacts = () => {
  const form = useRef ();
  const sendEmail = (e) => {

    
    e.preventDefault();

    

    emailjs.sendForm('service_rc503fa', 'template_dn5istd', form.current, 'KzzAPlbC5shTIAqOR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);   
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
        <div className="contact__options">
          <article className='contact_option'>
            <MdOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>mraliashraf6@gmail.com</h5>
            <a target="_blank" href="mailto:mraliashraf6@gmail.com">Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option_icon'/>
            <h4>linkedin</h4>
            <h5>Ali Ashraf</h5>
            <a target="_blank" href="https://www.linkedin.com/in/ali-ashraf-9a809b165/">Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>WhatsSApp</h4>
            <h5>+201097226222</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=201097226222">Send a Message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button onClick={donemessage} type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contacts