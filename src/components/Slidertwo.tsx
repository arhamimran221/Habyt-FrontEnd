import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from '../assets/images/partners/Card2/1.png'
import Image2 from '../assets/images/partners/Card2/2.png'
import Image3 from '../assets/images/partners/Card2/3.png'
import Image4 from '../assets/images/partners/Card2/4a.png'
import privateAppa from '../assets/privateicon.svg'

const Slidertwo: React.FC = () => {
  return (
    <div className='max-w-screen-lg mx-auto  '>
      <div className='  p-2 font-light text-[12px] flex gap-2 relative z-[100] bg-[#fff] w-[170px] top-[12px] left-[12px]'>
      <img src={privateAppa} alt="missing" />

        PRIVATE APARTMENT
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

export default Slidertwo
