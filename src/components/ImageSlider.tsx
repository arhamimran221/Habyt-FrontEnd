import { FC, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

interface Image {
  url: string
}

interface Props {
  images: Image[]
  id: string
  setIsImageShow: (isShow: boolean) => void
}

const ImageSlider: FC<Props> = ({ images, id, setIsImageShow }) => {
  const [showFullImage, setShowFullImage] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')

  return (
    // <>
    //   <div
    //     id={carouselExampleIndicators-${id}}
    //     className='carousel slide w-full h-[15rem]'
    //     data-bs-ride='carousel'>
    //     <div className='carousel-indicators'>
    //       {images.map((image, index) => (
    //         <button
    //           key={index}
    //           type='button'
    //           data-bs-target={#carouselExampleIndicators-${id}} // Use unique id
    //           data-bs-slide-to={index}
    //           className={index === 0 ? 'active' : ''}
    //           aria-current={index === 0 ? 'true' : 'false'}
    //           aria-label={Slide ${index + 1}}></button>
    //       ))}
    //     </div>
    //     <div className='carousel-inner h-full'>
    //       {images.map((image, index) => (
    //         <div
    //           className={`carousel-item h-[120px]  ${
    //             index === 0 ? 'active' : ''
    //           }`}
    //           key={index}>
    //           <img
    //             src={image.url}
    //             className='d-block w-100 h-full object-cover'
    //             alt={Slide ${index + 1}}
    //             onClick={() => {
    //               setShowFullImage(true)
    //               setImageUrl(image.url)
    //               setIsImageShow(true)
    //             }}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //     <button
    //       className='carousel-control-prev'
    //       type='button'
    //       data-bs-target={#carouselExampleIndicators-${id}}
    //       data-bs-slide='prev'>
    //       <span className='bg-zinc-800 p-2 rounded-full' aria-hidden='true'>
    //         <FaArrowLeft />
    //       </span>
    //       <span className='visually-hidden'>Previous</span>
    //     </button>
    //     <button
    //       className='carousel-control-next'
    //       type='button'
    //       data-bs-target={#carouselExampleIndicators-${id}}
    //       data-bs-slide='next'>
    //       <span className='bg-zinc-800 p-2 rounded-full' aria-hidden='true'>
    //         <FaArrowRight />
    //       </span>
    //       <span className='visually-hidden'>Next</span>
    //     </button>
    //   </div>
    //   {showFullImage && (
    //     <div
    //       className='slider-sts cursor-pointer w-[100vw] h-[100vh] fixed flex justify-center items-center bg-[#353535d3] top-0 md:top-16'
    //       style={{
    //         zIndex: '45',
    //       }}>
    //       <RxCross1
    //         className='absolute top-16 left-4 text-white text-2xl cursor-pointer'
    //         onClick={() => {
    //           setIsImageShow(false)
    //           setShowFullImage(false)
    //         }}
    //       />
    //       <img
    //         src={imageUrl}
    //         alt='image'
    //         className='w-full h-full object-contain shadow-2xl'
    //         onClick={() => {
    //           setIsImageShow(false)
    //           setShowFullImage(false)
    //         }}
    //       />
    //     </div>
    //   )}
    // </>

    <>
      <div
        id='default-carousel'
        className='relative w-full h-[15rem]'
        data-carousel='slide'>
        <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
          {images.map((image, index) => (
            <div
              className='hidden duration-700 ease-in-out'
              data-carousel-item
              key={index}>
              <img
                src={image.url}
                className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                alt='...'
              />
            </div>
          ))}
        </div>
        <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
          {images.map((_, index) => (
            <button
              type='button'
              className='w-3 h-3 rounded-full'
              aria-current='true'
              aria-label={`'Slide' ${++index}`}
              data-carousel-slide-to={index}></button>
          ))}
        </div>
        <button
          type='button'
          className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev>
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next>
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </>
  )
}

export default ImageSlider