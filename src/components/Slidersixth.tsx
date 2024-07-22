import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from '../assets/images/partners/Card6/1a_bed.png'
import Image2 from '../assets/images/partners/Card6/2.png'
import Image3 from '../assets/images/partners/Card6/3.png'
import Image4 from '../assets/images/partners/Card6/4.png'
import privateRoom from '../assets/privateroom.svg'

const SliderSixth: React.FC = () => {
  return (
    <div className='max-w-screen-lg mx-auto  '>
      <div className='  p-2 font-light text-[12px] flex gap-2 relative z-[100] bg-[#fff] w-[170px] top-[12px] left-[12px]'>
      <img src={privateRoom} alt="missing" />

        PRIVATE ROOM
      </div>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={Image1} alt='Slide 1' />
        </div>
        <div>
          <img src={Image2} alt='Slide 2' />
        </div>
        <div>
          <img src={Image3} alt='Slide 3' />
        </div>
        <div>
          <img src={Image4} alt='Slide 4' />
        </div>
      </Carousel>
    </div>
  )
}

export default SliderSixth
