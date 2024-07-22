import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from '../assets/images/partners/Card5/1a.png'
import Image2 from '../assets/images/partners/Card5/2.png'
import Image3 from '../assets/images/partners/Card5/3.png'
import Image4 from '../assets/images/partners/Card5/4.png'
import privateRoom from '../assets/privateroom.svg'


const Sliderfifth: React.FC = () => {
  return (
    <div className='max-w-screen-lg mx-au  PRIVATE ROOM</div>to  '>
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

export default Sliderfifth
