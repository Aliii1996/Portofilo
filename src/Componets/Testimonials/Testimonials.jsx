import React from 'react'
import './Testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar : AVTR1,
    name : 'Tina',
    review : ' Tina can look after the design conclusions depending on guaranteeing an optimistic user understanding, awesome at Getting the right blend of functional and aesthetic design',
  },
  {
    avatar : AVTR2,
    name : 'Mostafa Ahmed',
    review : 'Mostafa is a very gifted developer, He has outstanding programming skills and works really hard to make the project done I highly recommend him'
  },
  {
    avatar : AVTR3,
    name : 'Marco',
    review : 'Frankly a very nice job + the videos explained are very excellent and beautiful and they helped me very, very much. I recommend dealing with him.'
  },

  {
    avatar : AVTR4,
    name : 'Layila',
    review : 'I salute you for your effort and this great content.. the Arabic content was really in need of this topic..may God make it in the balance of your good deeds, God willing'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clints</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination , Scrollbar , Autoplay]}
      spaceBetween={40}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
      pagination={{ clickable: true }}
      
    
      >
        {
          data.map(({avatar, name , review}, index  ) => {
            return (
              <SwiperSlide key={index} className = "testimonial">
                <div className='clint__avatar'>
                  <img src={avatar}  />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          } )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials