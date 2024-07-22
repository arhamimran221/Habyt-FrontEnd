import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Imagenew1 from '../assets/images/partners/Card4/1a.png'
import Imagenew2 from '../assets/images/partners/Card4/2a.png'
import Imagenew3 from '../assets/images/partners/Card4/3a.png'
import Imagenew4 from '../assets/images/partners/Card4/4a.png'
import privateRoom from '../assets/privateroom.svg'

const SliderFour: React.FC = () => {
  return (
    <div className='max-w-screen-lg mx-auto  '>
      <div className='  p-2 font-light text-[12px] flex gap-2 relative z-[100] bg-[#fff] w-[170px] top-[12px] left-[12px]'>
      <img src={privateRoom} alt="missing" />

        PRIVATE ROOM
      </div>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
        <div>
          <img src={Imagenew1} alt='Slide_1' />
        </div>
        <div>
          <img src={Imagenew2} alt='Slide_2' />
        </div>
        <div>
          <img src={Imagenew3} alt='Slide_3' />
        </div>
        <div>
          <img src={Imagenew4} alt='Slide_4' />
        </div>
      </Carousel>
    </div>
  )
}

export default SliderFour
