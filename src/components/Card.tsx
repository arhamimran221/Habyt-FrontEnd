import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import ImageSlider from './ImageSlider'
import CropFreeIcon from '@mui/icons-material/CropFree'
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined'
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from '../assets/images/partners/Card1/1.jpeg'
import Image2 from '../assets/images/partners/Card1/2.png'
import Image3 from '../assets/images/partners/Card1/3.png'
import Image4 from '../assets/images/partners/Card1/4.jpg'
import privateAppa from '../assets/privateicon.svg'



interface CardProps {
  id: string
  images: [{url: string}]
  setIsImageShow: (show: boolean) => void
  availableFrom: string
  country: string
  size: number
  measurement: string
  rooms: number
  floor: string
  currency: string
  oldPrice: number
  currentPrice: number
  shareType: string
  data: any
  allRooms: any
  code: string
  isImageShow: boolean
  address: string
}
interface Image {
  url: string
}
const Card: FC<CardProps> = props => {
  const navigate = useNavigate()
  const availableFrom = moment(props.availableFrom).format('MMM D')

  return (
    <div className='relative flex flex-col h-fit md:w-[24rem] border cursor-pointer'>
      <p
        className='absolute z-900 top-0 left-0 ml-2 mt-2 bg-white text-zinc-900 font-bold w-fit p-2 text-[0.7rem]'
        style={{
          zIndex: '40',
        }}>
        {props.shareType}
      </p>
      {/* <ImageSlider
        id={props.id}
        images={props.images}
        setIsImageShow={props.setIsImageShow}
      /> */}

      <div className='max-w-screen-lg mx-auto min-h-[220px]'>
        <div className='p-2 font-light text-[12px] flex gap-2 relative z-[100] bg-[#fff] w-[166px] top-[12px] left-[12px]'>
        <img src={privateAppa} alt="missing" />
          PRIVATE APARTMENT
        </div>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
          {props?.images?.map((image, index) => (
            <div key={index}>
                <img src={image?.url} alt='Slide 1' />
            </div>
          ))}
        </Carousel>
      </div>

      <div
        className='w-full'
        onClick={() =>
          navigate(`/room/${props.country}/${props.id}`, {
            state: {
              room: props.data,
              allRooms: props.allRooms,
              country: props.country,
              address: props.address
            },
          })
        }>
        <div className='flex flex-col gap-4 p-4 w-full h-fit'>
          <h2 className='font-bold text-xl text-left capitalize w-full'>
            {props.address}
          </h2>
          <p className='text-left capitalize w-full'>{props.address}</p>
          <div className='flex gap-2 items-center text-[0.8rem] text-black'>
            <div className='flex gap-2'>
              <CropFreeIcon />
              <span>
                {props.size} {props.measurement}
              </span>
            </div>
            <div className='flex gap-2'>
              <LocalHotelOutlinedIcon /> <span>{props.rooms} bedrooms</span>
            </div>
            <div className='flex gap-2'>
              <StairsOutlinedIcon /> <span>{props.floor}</span>
            </div>
          </div>
        </div>
        <div className='bg-stone-100 p-4 w-full flex justify-between items-center'>
          <p className='px-2 pb-[2px] h-fit border border-zinc-900 text-zinc-800 text-left flex items-center justify-center text-sm'>
            From : {availableFrom}
          </p>
          <div className='flex flex-col justify-end items-center gap-[2px]'>
            <div className='flex gap-2 items-center'>
              <del className='text-zinc-800 text-sm'>{`${props.currency} ${props.oldPrice}`}</del>
              <p className='text-purple-500'>{`${props.currency} ${props.currentPrice}`}</p>
            </div>
            <p className='text-stone-600 text-[0.8em] font-bold'>monthly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
