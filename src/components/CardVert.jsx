import React from 'react'
import CropFreeIcon from '@mui/icons-material/CropFree'
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined'
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined'
import ImageSlider from './ImageSlider'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const CardVert = props => {
  const navigate = useNavigate()
  const availableFrom = moment(props?.availableFrom).format('MMM D')

  return (
    <div className='relative flex h-fit w-full md:w-[28rem] border cursor-pointer'>
      {/* <ImageSlider id={props?.id} images={props?.images} className="h-[15rem] w-full" setIsImageShow={props?.setIsImageShow} imageShow={props?.imageShow} /> */}
      <img
        src={props.images[0].url}
        className='h-[18rem] w-[15rem] object-cover'
      />
      <div
        className='w-full flex flex-col justify-between'
        onClick={() =>
          navigate(`/${props.country}/${props?.id}`, {
            state: {
              room: props?.data,
              allRooms: props?.allRooms,
              country: props?.country,
            },
          })
        }>
        <div className='flex flex-col gap-4 p-4 w-full h-fit'>
          <h2 className='font-bold text-xl text-left capitalize w-full'>
            {props?.country}
          </h2>
          <p className='text-left capitalize w-full'>{props?.country}</p>
          <div className='flex gap-2 items-center text-[0.8rem]'>
            <div className='flex gap-2'>
              <CropFreeIcon />{' '}
              <span>
                {props?.size} {props?.measurement}
              </span>
            </div>
            <div className='flex gap-2'>
              <LocalHotelOutlinedIcon /> <span>{props?.rooms} bedrooms</span>
            </div>
            <div className='flex gap-2'>
              <StairsOutlinedIcon /> <span>{props?.floor}</span>
            </div>
          </div>
        </div>
        <div className='bg-stone-100 p-4 w-full flex justify-between items-center'>
          <p className='px-2 pb-[2px] h-fit border border-zinc-900 text-zinc-800 text-left flex items-center justify-center text-sm'>
            From : {availableFrom}
          </p>
          <div className='flex flex-col justify-end items-center gap-[2px]'>
            <div className='flex gap-2 items-center'>
              <del className='text-zinc-800 text-sm'>{`${props?.currency} ${props?.oldPrice}`}</del>
              <p className='text-purple-500'>{`${props?.currency} ${props?.currentPrice}`}</p>
            </div>
            <p className='text-stone-600 text-[0.8em] font-bold'>monthly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardVert
