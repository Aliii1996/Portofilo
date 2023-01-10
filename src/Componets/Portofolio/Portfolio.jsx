import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jobdone site photo.png'
import IMG2 from '../../assets/Movies App photo.png'
import IMG3 from '../../assets/Fashion photo.png'
import IMG4 from '../../assets/blondi site bootstraap.png'
import IMG5 from '../../assets/photpgrahpy Site Photo.png'
import IMG6 from '../../assets/HiTower site photo.png'


const data = [
  {
    id : 1,
    image : IMG1,
    title : 'An advertising agency, often referred to as a creative agency or an ad agency',
    github : 'https://github.com/',
    demo : 'https://jobdone-adv.com/'
  },
  {
    id : 2,
    image : IMG2,
    title : 'IMDb is the worlds most popular and authoritative source for movie',
    github : 'https://github.com/',
    demo : 'https://famous-marzipan-c91eff.netlify.app/'
  },
  {
    id : 3,
    image : IMG3,
    title : 'Select From a Wide Variety of street wear inspired T-shirts, Hoodies & Sweatshirts. Shop quality',
    github : 'https://github.com/',
    demo : 'https://bejewelled-sable-e04dd4.netlify.app/'
  },
  {
    id : 4,
    image : IMG4,
    title : 'templete website with responsive pages using bootstrap only',
    github : 'https://github.com/',
    demo : 'https://taupe-sorbet-cee06e.netlify.app'
  },
  {
    id : 5,
    image : IMG5,
    title : ' A good photography website is a showcase for photos. Take inspiration',
    github : 'https://github.com/',
    demo : 'https://romantic-wing-3d23a2.netlify.app/'
  },
  {
    id : 6,
    image : IMG6,
    title : 'websites bring convenience to buyers and exposure to sellers. Buyers can view many of images,videos, and features ',
    github : 'https://github.com/',
    demo : 'https://webdesign.be4em.info/High-Tower/index.html'
  },

]
const Portfolio = () => {
  return (
    <section  id='portfolio'>
      <h5 className='title-portfolio'>My Recent Work</h5>
      <h2 className='title-portfolio'>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
            )
          }
          )
        }
    </div>
    </section>
    
  )
}

export default Portfolio