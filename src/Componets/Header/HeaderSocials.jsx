import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {GrGithub} from "react-icons/gr"
import {FaDribbble} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a ahref="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a ahref="https://github.com" target="_blank"><GrGithub/></a>
        <a ahref="https://dribbble.com" target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials